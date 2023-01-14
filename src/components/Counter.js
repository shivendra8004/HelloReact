import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increament() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  decreament() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.increament();
          }}
        >
          Increament
        </button>
        <button
          onClick={() => {
            this.decreament();
          }}
        >
          Decreament
        </button>
      </div>
    );
  }
}

export default Counter;
