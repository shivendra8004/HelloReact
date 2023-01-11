import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Shivendra" />
      </div>
    );
  }
}
export default App;
