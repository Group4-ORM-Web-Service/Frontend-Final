import './App.css';
import { ThemeProvider } from '@mui/material';
import customTheme from './them';
import Router from './routes';
import NavBars from './screens/navbar/navbars'; 

const App = () => {
  return (
   
    <ThemeProvider theme={customTheme}>
     <NavBars/>
      <Router />
    </ThemeProvider>
  );
};

export default App;
