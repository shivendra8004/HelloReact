import React, { Component } from "react";

export class Greet extends Component {
  constructor() {
    super();
    this.state = {
      count: 4,
    };
  }
  render() {
    const { name, age } = this.props;
    const { count } = this.state;
    return (
      <div>
        {name} {age} {count}
      </div>
    );
  }
}

export default Greet;
