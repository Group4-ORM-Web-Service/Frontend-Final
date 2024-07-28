import './App.css';
import { ThemeProvider } from '@mui/material';
import customTheme from './them';
import Router from './routes';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
