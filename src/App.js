/* eslint-disable no-unused-vars */
import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import customTheme from './them';
import React from 'react';
import RouteContainer from './routes';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <AppProvider>
        <AuthProvider>
          <Box bgcolor='grey.100' width='100%' height='100%'>
            <RouteContainer />
          </Box>
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
