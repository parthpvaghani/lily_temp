import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import customTheme from "./utils/theme";
import Landing from './pages/Landing';
import WordBank from './pages/WordBank';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/about" element={<Landing/>} />
            <Route path="/faetures" element={<Landing/>} />
            <Route path="/wordBank" element={<WordBank/>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
