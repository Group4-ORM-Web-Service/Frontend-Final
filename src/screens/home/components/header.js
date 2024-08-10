import React from 'react';
import '../../../styles/header.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAME } from '../../../constant/keyComponent';

const Headers = () => {
  const navigate = useNavigate();

  const handleViewProduct = React.useCallback(() => {
    navigate(ROUTES_NAME.PRODUCTS, { state: {} });
  }, [navigate]);
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Welcome to Shop Card</h2>
        <Button onClick={handleViewProduct}>View Products</Button>
      </div>
    </div>
  );
};

export default React.memo(Headers);
