// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROUTES_NAME } from '../constant/keyComponent';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated==>', isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES_NAME.LOGIN} />;
};

export default ProtectedRoute;
