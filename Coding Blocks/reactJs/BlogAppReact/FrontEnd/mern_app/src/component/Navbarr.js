import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbarr extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid black",
          backgroundColor: "orange",
          color: "black",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-evenly",
            padding: "5px",
            margin: "5px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbarr;
