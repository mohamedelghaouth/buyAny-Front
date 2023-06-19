/** @format */

import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "BuyAny",
  clientId: "Buy-Any-Front",
  redirectUri: "http://localhost:3000/",
});

export default keycloak;
