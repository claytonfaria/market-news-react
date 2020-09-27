import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar/NavBar';
import TickerBar from './components/TickerBar/TickerBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StocksDetails from './pages/StocksDetails';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <TickerBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/?tvwidgetsymbol=" component={StocksDetails} />
          <Route path="/:id" component={StocksDetails} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
