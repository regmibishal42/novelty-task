import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import UserProvider from './Context/userContext';

const theme = extendTheme({
  colors: {
      customBlue: {
          100: "#659999",
          500: "#659999"
      },
      customOrange: {
          100: "#f4791f",
          500: "#ff3c00"
      }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProvider>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </UserProvider>
  </BrowserRouter>

)
