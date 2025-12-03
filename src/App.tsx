import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DybbuksAndDreidels } from './pages/DybbuksAndDreidels';
import { DreidelSpinner } from './pages/DreidelSpinner';
import { ForRetailers } from './pages/ForRetailers';
import { UpcomingGames } from './pages/UpcomingGames';

function App() {
  return (
    <Container>
      <HashRouter>
        <Navbar />
        <Container style={{marginTop: "80px", marginBottom: "50px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dybbuks-and-dreidels" element={<DybbuksAndDreidels />} />
            <Route path="/dybbuks-and-dreidels/dreidel-spinner" element={<DreidelSpinner />} />
            <Route path="/for-retailers" element={<ForRetailers />} />
            <Route path="/upcoming" element={<UpcomingGames/>} />
          </Routes>
        </Container>
        <Footer />
      </HashRouter>
    </Container>
  );
}

export default App;
