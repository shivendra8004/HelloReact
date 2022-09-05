import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        imgUrl: "https://picsum.photos/200"
    };
    render() {
        return (
            <React.Fragment>
                {/* <span>Hello World! {this.countOption()} times</span> */}
                {/* <button>Increament</button> */}
                <img src={this.state.imgUrl} alt="" />
            </React.Fragment>
        );
    }
    // countOption() {
    //     let num = this.state.count;
    //     return num === 0 ? <h1>Zero</h1> : <h1>{num}</h1>;
    // }
}

export default Counter;