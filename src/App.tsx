import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DybbuksAndDreidels } from './pages/DybbuksAndDreidels';
import { DreidelSpinner } from './pages/DreidelSpinner';

function App() {
  return (
    <Container>
      <HashRouter>
        <Navbar />
        <Container style={{marginTop: "80px", marginBottom: "30px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dybbuks-and-dreidels" element={<DybbuksAndDreidels />} />
            <Route path="/dybbuks-and-dreidels/dreidel-spinner" element={<DreidelSpinner />} />
          </Routes>
        </Container>
        <Footer />
      </HashRouter>
    </Container>
  );
}

export default App;
