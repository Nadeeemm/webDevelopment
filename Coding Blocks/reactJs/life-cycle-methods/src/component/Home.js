import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "40rem", margin:"20px auto" }}>
          <Card.Img
            variant="top"
            src={`https://source.unsplash.com/1600x900/?${this.props.item}`}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
