import React, { Component } from "react";
import Card from "./Card";


class CardList extends Component {
  render() {
    return (
      <div>
        <Card
          name="Nadeem"
          age={23}
          color="Purple"
          hobbies={["Singing", "Reading", "Football"]}
        />
        <Card
          name="Karan"
          age={22}
          color="Orange"
          hobbies={["Basketball", "Reading", "Dancing"]}
        />
        <Card
          name="Kashish"
          age={23}
          color="Red"
          hobbies={["VollyBall", "Gaming"]}
        />
      </div>
    );
  }
}
export default CardList;
