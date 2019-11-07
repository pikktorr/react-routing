import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Items from "./components/Items";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Items} />
        <Route path="/shop/:id" component={ItemDetail} />
      </div>
    </Router>
  );
};

export default App;
