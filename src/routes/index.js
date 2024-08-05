import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from '../screens/authentication/Register';
import LoginPage from '../screens/authentication/Login';
import HomePage from '../screens/home/Home';
import ProductDetailPage from '../screens/productDetail/productDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/products-detail' element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
