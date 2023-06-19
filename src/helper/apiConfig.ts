import axios, { Cancel } from 'axios'

import { clearItem, insertItem, isPending } from './apiCashe'
import { useKeycloak } from '@react-keycloak/web';

const apiClient = axios.create({
 headers: {
   Accept: 'application/json',
   withCredentials: true
 }
})

const setAuthorizationHeader = (token: string | undefined) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const configureAxios = () => {
  const { keycloak } = useKeycloak();

  // Retrieve the access token from the Keycloak instance
  const token = keycloak.token;

  // Set the access token as the default header for Axios
  setAuthorizationHeader(token);
};

function isCancelError(error: any): error is Cancel {
 return error.message === 'canceled'
}

apiClient.interceptors.request.use(
 function (config) {
   configureAxios()
   return config
 },
 function (error) {
   return Promise.reject(error)
 }
)

apiClient.interceptors.response.use(
 response => {
   clearItem(response.config)
   return response
 },
 error => {
   //aborted in request interceptor
   if (isCancelError(error)) {
     console.warn('aborting double sumbit')
     return Promise.reject(error)
   }

   console.error(error)

   //clean cache if error
     clearItem(error.config)
     
   return Promise.reject(error)
 }
)

export default apiClient