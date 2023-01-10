import React, { Component } from "react";
import "./App.css";
// import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Shiva" age="19">
          <p>He is a Sweet Boy</p>
        </Greet>
        <Greet name="Hello" age="21">
          <button>Click Me</button>
        </Greet>
        <Welcome name="Shiv" age="19">
          <p>Full Name is Shivendra</p>
        </Welcome>
        <Welcome name="Shivendra" age="21">
          <p>Nick Name is Shiva</p>
        </Welcome>
        {/* <Hello /> */}
      </div>
    );
  }
}
export default App;
