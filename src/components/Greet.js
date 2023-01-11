import React, { Component } from "react";

class Greet extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Returning Without JSX")
    );
  }
}
export default Greet;
