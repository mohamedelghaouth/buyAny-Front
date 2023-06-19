/** @format */

import React, { Component, FC } from "react";
import { Navigate } from "react-router-dom";
import keycloak from "../../helper/keycloakHelper";

const ProtectedRoute: FC<{ children: any }> = ({ children }) => {
  return keycloak.authenticated ? children() : <Navigate to="/login" />;
};

export default ProtectedRoute;
