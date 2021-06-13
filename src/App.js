import React, { Component } from "react";

import "./App.css";

//Components
import Header from "./components/header/Header";

// function App() {
//   return (
//     <div className="App">
//       <h1>Mi Tienda en ReactJs</h1>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Hello Word</h1>
      </>
    );
  }
}

export default App;
