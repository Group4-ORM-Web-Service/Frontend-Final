import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../component/home/Home';
import LoginPage from '../component/authentication/Login';
import RegisterPage from '../component/authentication/Register';
import ProductComponent from '../component/productComponent/productComponent';
import ProductDetailComponent from '../component/productDetailComponent/productDetailComponent';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          </Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/products-detail/' element={<ProductDetailComponent />} />
        <Route path='/products' element={<ProductComponent />} /></Routes>
    </BrowserRouter>
  );
};

export default Router;
