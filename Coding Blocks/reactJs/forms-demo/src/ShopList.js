import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Form1 from "./Form1";
import "./ShopList.css";

class ShopList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Potato",
          qty: "5",
          id: uuid(),
        },
        {
          name: "Mango",
          qty: "10",
          id: uuid(),
        },
        {
          name: "Oranges",
          qty: "2",
          id: uuid(),
        },
      ],
    };
  }

  createItemHandler = (item) => {
    item = {
      ...item,
      id: uuid(),
    };
    const newItems = [...this.state.items, item];
    this.setState({ items: newItems });
  };

  deleteItemHandler = (id) => {
    // console.log("deleted");
    // console.log(id);
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: newItems });
  };

  render() {
    let listItems = this.state.items.map((item) => {
      let id = uuid();
      return (
        <li key={id}
        //  onClick={this.deleteItemHandler.bind(this, item.id)}
         onClick={()=>this.deleteItemHandler(item.id)}
         >
        Name: {item.name} | Quantity: {item.qty}
        </li>
      );
    });

    return (
      <div className="ShopList">
        <h1>Shop List</h1>
        <Form1 createItem={this.createItemHandler} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default ShopList;
