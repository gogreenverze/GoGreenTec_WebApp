import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Gilroy-Medium'
      ].join(','),
      h6: {
        color: '#66CD0D',
      },
      h5: {
        color: '#fff', 
      },
      h4: {
        color: '#fff', 
      },
      h3: {
        color: '#fff', 
      },
      h2: {
        color: '#fff', 
      },
      body1: {
        color: '#66CD0D',
      },
      subtitle1: {
        color: '#66CD0D',
      },
      subtitle2: {
        color: '#66CD0D',
      },
      caption: {
        color: '#66CD0D',
      },
    },
    Link: {
      fontFamily: [
        'Gilroy-Medium'
      ].join(','),
    },
  });




  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Routes />
    </Router>
    </ThemeProvider>
  );
}

export default App;
