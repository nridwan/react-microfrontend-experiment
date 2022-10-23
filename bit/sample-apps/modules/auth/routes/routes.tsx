import { useStorageData } from '@nridwan/sample-apps.components.storage';
import { Login } from '@nridwan/sample-apps.modules.auth.pages.login';
import React, { useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const AuthRoute: React.FC = () => {
  const login = useStorageData(useCallback((data) => data.login, []));

  if (!!login) return <Navigate to="/home" />;

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

export default AuthRoute;
