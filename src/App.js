import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Detail from "./Detail";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
      <Route path="/checkout">
      <Header/>
        <Checkout />
      </Route>
      <Route path="/Detail">
      <Header/>
        <Detail />
      </Route>
      <Route path="/">
        <Header/>
        <h1>Products in Range</h1>
        <Home />
      </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
