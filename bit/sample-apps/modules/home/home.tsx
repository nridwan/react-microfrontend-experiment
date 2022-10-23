import { useStorageData } from '@nridwan/sample-apps.components.storage';
import React, { useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './page/Home';

const HomeRoute: React.FC = () => {
  const login = useStorageData(useCallback((data) => !!data.login, []));

  if (!login) return <Navigate to="/auth/login" />;

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default HomeRoute;
