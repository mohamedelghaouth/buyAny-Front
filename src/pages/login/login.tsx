/** @format */

import React from "react";
import { Navigate } from "react-router-dom";
import keycloak from "../../helper/keycloakHelper";
import "./login.css";
import Header from "../../components/header";

const Login = () => {
  return keycloak.authenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="container">
      <Header />
      <div className="centered-element">
        <h2>Tou need to Login</h2>
      </div>
    </div>
  );
};

export default Login;
