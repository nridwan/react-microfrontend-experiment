import React, { useCallback } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useStorageData } from "../../components/storage/StorageProvider";
import Login from "./page/Login";

const AuthRoute: React.FC = () => {
  const login = useStorageData(useCallback((data) => !!data.login, []));

  if (login) return <Navigate to="/home" />;

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

export default AuthRoute;
