import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar/NavBar';
import TickerBar from './components/TickerBar/TickerBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <TickerBar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
