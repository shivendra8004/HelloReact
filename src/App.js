import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
// import Counter from "./components/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter num="1" /> */}
        <Greet name="Shivendra" age="19" />
      </div>
    );
  }
}
export default App;
