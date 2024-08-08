import { Box, Typography } from '@mui/material';
import React from 'react';
import Sidebar from '../../layouts/sidebar';

const HomePage = () => {
  return (
    <Box bgcolor='transparent' width='100%' height='100%'>
      <Sidebar pageName='Home' />
      <Typography variant='h1' color='blue.800'>
        Welcome to Home page
      </Typography>
    </Box>
  );
};

export default HomePage;
