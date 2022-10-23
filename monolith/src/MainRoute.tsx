import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navi from "./components/navi/Navi";
import AuthRoute from "./modules/auth/AuthRoute";
import GalleryRoute from "./modules/gallery/GalleryRoute";
import HomeRoute from "./modules/home/HomeRoute";

function MainRoute() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="auth/*" element={<AuthRoute />} />
        <Route path="home/*" element={<HomeRoute />} />
        <Route path="gallery/*" element={<GalleryRoute />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default MainRoute;
