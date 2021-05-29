// import React from "react";
// import Hello from "./component/Hello";
// import Card from "./component/Card";
// import "./App.css";
// import Product from "./component/Product";
// import CardList from "./component/CardList";

// class App extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             cards: [{
//                     name: "Nadeem",
//                     age: 23,
//                     color: "Purple",
//                     hobbies: ["Reading", "Football"],
//                 },
//                 {
//                     name: "Kartik",
//                     age: 23,
//                     color: "Orange",
//                     hobbies: ["Reading", "Football"],
//                 },
//                 {
//                     name: "Kashish",
//                     age: 24,
//                     color: "Red",
//                     hobbies: ["Reading", "Football"],
//                 },
//                 {
//                     name: "Rohan",
//                     age: 23,
//                     color: "Blue",
//                     hobbies: ["Singing", "Football"],
//                 },
//             ],
//         };
//     }

//     render() {
//         let cardsList = this.state.cards.map((card) => {
//             return ( <
//                 Card name = { card.name }
//                 age = { card.age }
//                 color = { card.color }
//                 hobbies = { card.hobbies }
//                 />
//             );
//         });

//         return ( <
//             div className = "App" > { /* <CardList/> */ }

//             { cardsList }

//             { /* <Hello/> */ }

//             {
//                 /* <Product  Price={1000} />
//                         <Product  Price={2000} />
//                         <Product  Price={3000} /> */
//             } <
//             /div>
//         );
//     }
// }

// export default App;

// === === === === === === === === === === === === === === === === === === === === === === === === === === ==

import React, { Component } from "react";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div>
        <Person />
      </div>
    );
  }
}

export default App;
