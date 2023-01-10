import React, { Component } from "react";
import "./App.css";
import Message from "./components/Message";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Message name="Shivendra" />
      </div>
    );
  }
}
export default App;
