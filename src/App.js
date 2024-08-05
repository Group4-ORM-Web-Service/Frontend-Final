/* eslint-disable no-unused-vars */
import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import customTheme from './them';
import React from 'react';
import RouteContainer from './routes';


const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box bgcolor='white' width='100%' height='100%'>
        <RouteContainer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
