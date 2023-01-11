import React, { Component } from "react";

class Greet extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} Using Class Component</h1>
      </div>
    );
  }
}

export default Greet;
