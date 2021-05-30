import React, { Component } from "react";
import "./App.css";
// import ZenQuotes from "./ZenQuotes";
// import GithubCard from "./GithubCard";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import { Route, Switch, Link } from "react-router-dom";
import Card from "./component/Card";
import Navbarr from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>       
          <Navbarr />
          <Switch>
            <Route exact path="/" component={() => <Home item="cat" />} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/card/:id" component={Card} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;