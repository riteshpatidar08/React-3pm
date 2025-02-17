import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const token = 'lkjflkdsj432l43jk42';
  if (!token) {
    return <Navigate to="/login" />;
  }
  if (token) {
    return <Outlet />;
  }
}

export default ProtectedRoutes;
