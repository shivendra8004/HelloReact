import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increament() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    this.setState((prevState, props) => ({
      count: prevState.count + this.props.num,
    }));
  }
  increamentFive() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.increamentFive();
          }}
        >
          increamentFive
        </button>
      </div>
    );
  }
}

export default Counter;
