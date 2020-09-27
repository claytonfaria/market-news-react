import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar/NavBar';
import TickerTape from './components/TickerBar/TickerTape';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StocksDetails from './pages/StocksDetails';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <TickerTape />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/:id" component={StocksDetails} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
