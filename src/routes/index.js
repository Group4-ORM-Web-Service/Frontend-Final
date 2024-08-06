import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from '../screens/authentication/Register';
import LoginPage from '../screens/authentication/Login';
import HomePage from '../screens/home';
import ProductDetailPage from '../screens/productDetail/productDetail';
import AdminPage from '../screens/admin/productTable';
import ProductPage from '../screens/products';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES_NAME } from '../constant/keyComponent';

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES_NAME.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES_NAME.REGISTER} element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES_NAME.HOME} element={<HomePage />} />
          <Route path={ROUTES_NAME.PRODUCTS} element={<ProductPage />} />
          <Route path={ROUTES_NAME.PRODUCT_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES_NAME.ADMIN} element={<AdminPage />}>
            <Route path='product' element={<AdminPage />} />
          </Route>
        </Route>

        {/* Redirect to home if no route matches */}
        <Route path='*' element={<Navigate to={ROUTES_NAME.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(RouteContainer);
