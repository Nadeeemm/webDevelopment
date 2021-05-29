// =================== Form ===============

// import React, { Component } from 'react';
// import "./App.css"
// import Input from './Input';
// import Form from './Form';

//  class App extends Component {
//   render() {
//     return (
//       <div   style={{textAlign:"center", margin:"40px"}}>
//         <Input/>
//         <Form/>
//       </div>
//     )
//   }
// }
// export default App;

import React, { Component } from "react";
import "./App.css";
import ShopList from "./ShopList";


class App extends Component {
  render() { 
    return (
      <div>
        <ShopList/>
      </div>
    );
  }
}
export default App;
