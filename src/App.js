import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import customTheme from "./utils/theme";
import Header from './components/sections/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
      <Router>
            <Landing/>
          </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
