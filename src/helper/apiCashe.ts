import { AxiosRequestConfig, AxiosResponse } from 'axios'


type AxiosCacheItem = {
 request: AxiosRequestConfig<any>
 response?: AxiosResponse<any, any>
 insertion: Date
}


const axiosCacheItems: Map<string, AxiosCacheItem> = new Map<
 string,
 AxiosCacheItem
>()


function getId(config: AxiosRequestConfig<any>): string {
 return config.url + '&' + config.method
}


export function canCache(config: AxiosRequestConfig<any>): boolean {
 // allow documents multiple upload
 if (config.url?.endsWith('/document')) {
   return false
 }


 return (
   config.method === 'put' ||
   config.method === 'post' ||
   config.method === 'PUT' ||
   config.method === 'POST'
 )
}


export function isPending(config: AxiosRequestConfig<any>): boolean {
 const uniqueUrl = getId(config)
 //in progress
 const cacheRequest = axiosCacheItems.get(uniqueUrl)


 return cacheRequest !== undefined && cacheRequest.response === undefined
}


export function insertItem(
 config: AxiosRequestConfig<any>,
 response?: AxiosResponse<any, any>
): void {
 if (!canCache(config)) return
 const uniqueUrl = getId(config)
 axiosCacheItems.set(uniqueUrl, {
   request: config,
   response: response,
   insertion: new Date()
 })
}


export function clearItem(config: AxiosRequestConfig<any>) {
 const uniqueUrl = getId(config)
 axiosCacheItems.delete(uniqueUrl)
}


