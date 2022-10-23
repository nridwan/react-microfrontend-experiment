import React, { useCallback } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useStorageData } from "./components/storage/StorageProvider";
import Login from "./page/Login";

export default function Router() {
  const login = useStorageData(useCallback((data) => !!data.login, []));

  return (
    <Routes>
      <Route path="auth" element={login ? <Navigate to="/home" /> : undefined}>
        <Route path="login" element={<Login />} />
        <Route index element={<Navigate to={login ? "/home" : "login"} />} />
        <Route path="*" element={<Navigate to={login ? "/home" : "login"} />} />
      </Route>
      <Route path="*" element={null} />
    </Routes>
  );
}
