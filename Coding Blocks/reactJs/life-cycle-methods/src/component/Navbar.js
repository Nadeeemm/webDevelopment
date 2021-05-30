import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


class Navbarr extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
        
          
          <Nav className="mr-auto" >
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
         
        </Navbar>
      </div>
    );
  }
}

export default Navbarr;
