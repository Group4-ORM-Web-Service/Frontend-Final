import './App.css';
import { ThemeProvider } from '@mui/material';
import customTheme from './them';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layouts/sidebar';
import ProductPage from './screens/products/product';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
      <Sidebar />
      <div className="main">
        <div className="main-content">
          <Routes>
            <Route path="/product" element={<ProductPage/>} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
