import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar/NavBar';
import TickerBar from './components/TickerBar/TickerBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StocksDetails from './pages/StocksDetails';
import MoreArticles from './pages/MoreArticles';
import fetchArticles from './API/fetchArticles';
import Calendar from './pages/Calendar';
import MarketOverviewPage from './pages/MarketOverviewPage';
import StocksOverviewPage from './pages/StocksOverviewPage';

function App() {
  const [updateSymbol, setUpdateSymbol] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const populateNewsState = async () => {
      const data = await fetchArticles();
      setNews(data);
    };
    populateNewsState();
  }, []);

  return (
    <>
      <Router>
        <NavBar setUpdateSymbol={setUpdateSymbol} />
        <TickerBar />
        <Switch>
          <Route exact path="/">
            <Homepage news={news} />
          </Route>
          <Route exact path="/articles">
            <MoreArticles news={news} />
          </Route>
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/marketoverview" component={MarketOverviewPage} />
          <Route exact path="/stocksoverview" component={StocksOverviewPage} />
          <Route path="/:id">
            <StocksDetails
              updateSymbol={updateSymbol}
              setUpdateSymbol={setUpdateSymbol}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
