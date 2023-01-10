import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome ",
    };
  }
  changedMessage() {
    this.setState({
      message: "Thanks For Subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.message}
          {this.props.name}
        </h1>
        <button
          onClick={() => {
            this.changedMessage();
          }}
        >
          Subscribe Please
        </button>
      </div>
    );
  }
}
export default Message;
