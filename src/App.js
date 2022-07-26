import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import customTheme from './utils/theme';
import AppLayout from './components/layouts/app-layout';
import WordBank from './pages/WordBank';
import Home from './pages/Home';
import Research from './pages/Research';
import WordBankTabs from './pages/WordBankTabs';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize='lg'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path={`/`} element={<Home />} />
              <Route path={`/wordBank`} element={<WordBank />} />
              <Route path={`/wordBankTabs`} element={<WordBankTabs />} />
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
