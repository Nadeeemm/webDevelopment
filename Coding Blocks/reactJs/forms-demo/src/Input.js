import React, { Component } from "react";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  nameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h1> {this.state.username} </h1>
        <label htmlFor="username"> Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Input"
          onChange={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default Input;
