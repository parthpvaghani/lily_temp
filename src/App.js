import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import customTheme from "./utils/theme";
import Header from './components/sections/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/about" element={<Landing/>} />
            <Route path="/faetures" element={<Landing/>} />
            <Route path="/wordBank" element={<Landing/>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
