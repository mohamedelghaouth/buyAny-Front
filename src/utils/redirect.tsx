/** @format */

import React, { FC } from "react";
import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute: FC<{ children: any }> = ({ children }) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  if (hasJWT()) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export function redirectToErrorPage(status: number) {
  window.location.replace(`/error/${status}`);
}

export function redirectToLogin() {
  //window.location.href = window.settings.landing.loginUrl || '/login'
}
