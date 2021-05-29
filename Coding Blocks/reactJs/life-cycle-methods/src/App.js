import React, { Component } from "react";
import "./App.css";
import ZenQuotes from "./ZenQuotes";
import GithubCard from './GithubCard';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* <ZenQuotes /> */}
        <GithubCard username="Nadeeemm"/>
        <GithubCard username="facebook"/>

      </div>
    );
  }
}

export default App;
