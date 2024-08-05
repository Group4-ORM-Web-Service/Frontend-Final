import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from '../screens/authentication/Register';
import LoginPage from '../screens/authentication/Login';
import HomePage from '../screens/home';
import ProductDetailPage from '../screens/productDetail/productDetail';
import AdminPage from '../screens/admin/productTable';
import ProductPage from '../screens/products';
import React from 'react';

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/home' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products-detail' element={<ProductDetailPage />} />
        <Route path='/admin' element={<AdminPage />}>
          <Route path='/admin/product' element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(RouteContainer);
