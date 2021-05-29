import React, { Component } from "react";
import axios from "axios";

class ZenQuotes extends Component {
  constructor(props) {
    super(props);
    console.log("Inside the constructor");
    this.state = {
      quote: "",
    };
  }

  componentDidMount() {
    console.log("Inside the componentDidMount");
    // this.setState({quote:"This is some Random Quote"})
    axios.get("https://api.github.com/zen").then(res => {
      // console.log(res.data);
      this.setState({ quote: res.data });
    });
  }


  render() {
    console.log("Inside the rendere");
    return (
      <div>
        <h1>Todays Quote is ...</h1>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default ZenQuotes;
