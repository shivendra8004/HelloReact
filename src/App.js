import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Shiva" />
        <Greet name="Hello" />
        {/* <Welcome /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}
export default App;
