import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      qty: "",
    };
  }

  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label htmlFor="username"> Name: </label>
        <input type="text" name="username" id="username" onChange={this.ChangeHandler}/>

        <label htmlFor="qty"> Quantity: </label>
        <input type="text" name="qty" id="qty" onChange={this.ChangeHandler} />

        <button> Submit </button>
      </form>
    );
  }
}

export default Form;
