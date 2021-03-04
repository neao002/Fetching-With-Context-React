import React, { Component } from "react";

import Thirdfile from "./Components/api";

import "../src/App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="hello">To DO</h1>
        <Thirdfile></Thirdfile>
      </div>
    );
  }
}

export default App;
