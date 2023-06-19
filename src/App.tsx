/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import home from "./pages/home/index";
import admin from "./pages/admin/admin";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./helper/keycloakHelper";
import Login from "./pages/login/login";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <React.StrictMode>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={home()} />
            <Route
              path="admin"
              element={<ProtectedRoute>{admin}</ProtectedRoute>}
            />
            <Route path="login" element={Login()} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </ReactKeycloakProvider>
  );
}

export default App;
