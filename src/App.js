import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import customTheme from './utils/theme';
import AppLayout from './components/layouts/app-layout';
import Home from './pages/Home';
import WordBank from './pages/WordBank';
import SearchWords from './pages/WordBank/SearchWords';
import Research from './pages/WordBank/SearchWords/Research';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize='lg'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path={`/`} element={<Home />} />
              <Route path={`/wordBank`} element={<WordBank />} />
              <Route path={`/searchWords`} element={<SearchWords />} />
              <Route path={`/research`} element={<Research />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
