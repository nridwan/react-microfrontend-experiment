import { Navi } from '@nridwan/sample-apps.components.navi';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoute } from '@nridwan/sample-apps.modules.auth.routes';
import { GalleryRoute } from '@nridwan/sample-apps.modules.gallery';
import { HomeRoute } from '@nridwan/sample-apps.modules.home';
import {
  LocalStorageListener,
  StorageProvider,
} from '@nridwan/sample-apps.components.storage';

export function AppApp() {
  return (
    <StorageProvider storageKey="stor">
      <LocalStorageListener />
      <Navi />
      <Routes>
        <Route path="auth/*" element={<AuthRoute />} />
        <Route path="home/*" element={<HomeRoute />} />
        <Route path="gallery/*" element={<GalleryRoute />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </StorageProvider>
  );
}
