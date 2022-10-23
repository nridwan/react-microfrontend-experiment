import React, { useCallback } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useStorageData } from "./components/storage/StorageProvider";
import Home from "./page/Home";

export default function Router() {
  const login = useStorageData(useCallback((data) => !!data.login, []));

  return (
    <Routes>
      <Route path="home" element={!login ? <Navigate to="/auth" /> : undefined}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to={!login ? "/auth" : ""} />} />
      </Route>
      <Route path="*" element={null} />
    </Routes>
  );
}
