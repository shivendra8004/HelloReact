import React, { Component } from "react";

class Greet extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello ",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thanks for Subscribing ",
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message} {this.props.name}
        </h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Greet;
