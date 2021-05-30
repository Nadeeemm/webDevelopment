import React, { Component } from "react";

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: "400px",
          boxShadow: "5px 5px 20px purple",
          border: "1px solid purple",
          margin: "10px auto",
        }}
      >
        <h1>This is the card with id: {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Card;
