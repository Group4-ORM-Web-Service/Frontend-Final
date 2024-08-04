import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../screens/home/Home';
import LoginPage from '../screens/authentication/Login';
import RegisterPage from '../screens/authentication/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/home' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
