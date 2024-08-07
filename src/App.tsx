import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { DybbuksAndDreidels } from './pages/DybbuksAndDreidels';
import { Navbar } from './components/Navbar';
import { Container } from '@mui/material';
import { DreidelSpinner } from './pages/DreidelSpinner';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dybbuks-and-dreidels" element={<DybbuksAndDreidels />} />
          <Route path="/dybbuks-and-dreidels/dreidel-spinner" element={<DreidelSpinner />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
