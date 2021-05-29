import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nadeem",
      age: 23,
      favColor: "Purple",
      show: false,
    };
  }

  nameChangeHandler = () => {
    this.setState({ name: this.state.name.toUpperCase() });
  };

  cardToggleHandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.cardToggleHandler} style={{ margin: "40px " }}>
          Toggle
        </button>

        {this.state.show ? (
          <article
            onClick={this.nameChangeHandler}
            style={{
              width: "400px",
              margin: "10px auto",
              border: "2px solid purple",
              boxShadow: "5px 5px 10px purple",
              padding: "10px",
            }}
          >
            <h2>Name: {this.state.name}</h2>
            <p>Age: {this.state.age}</p>
            <p>FavColor: {this.state.favColor}</p>
          </article>
        ) : null}
      </div>
    );
  }
}

export default Person;
