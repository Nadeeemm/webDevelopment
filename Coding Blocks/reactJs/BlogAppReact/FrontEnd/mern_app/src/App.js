import React, { Component } from "react";
// import { Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Navbarr from "./component/Navbarr";
import BlogList from "./component/BlogList";


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbarr />
        <BlogList />
      </div>
    );
  }
}

export default App;
