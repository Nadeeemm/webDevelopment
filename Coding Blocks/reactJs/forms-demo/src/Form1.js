import React, { Component } from "react";

class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      qty: "",
    };
  }

 

  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createItem(this.state)
    this.setState({name:"", qty:""})
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        Name:
        <input
          type="text"
          name="name"
          id="id"
          placeholder="Enter Item Name"
          onChange={this.ChangeHandler}
          value={this.state.name}
        />
        <br/> <br/>
        Quantity:
        <input
          type="text"
          name="qty"
          id="qty"
          placeholder="Enter Item Quantity"
          onChange={this.ChangeHandler}
          value={this.state.qty}
        />
         <br/> <br/>
        <button> Submit </button>
      </form>
    );
  }
}

export default Form1;
