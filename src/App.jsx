import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, VStack, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume';
import BgMountain from './assets/st_helens_image.jpg';
import theme from './theme';
//Collaborated with bootcamp-Mo to figure out how to do this, made my own tweaks, other than that all credit goes to her



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box
          bgImage={BgMountain}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          >
          <VStack
            minH="100vh"
            spacing={4}>
            <Header />
            <Container
              boxShadow='2xl'
              p='6'
              rounded='3xl'
              bg='#d2e999'
              maxW='container.md'
            >
              <Routes >
                <Route path="React-Portfolio/about" element={<About />} />
                <Route path="React-Portfolio/portfolio" element={<Portfolio />} />
                <Route path="React-Portfolio/resume" element={<Resume />} />
                <Route path='React-Portfolio/' element={<About />} />
              </Routes>
            </Container>
            <Footer />
          </VStack>
        </Box>
      </Router>
    </ChakraProvider >
  );
}

export default App;