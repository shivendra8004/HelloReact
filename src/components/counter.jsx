import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        imgUrl: "https://picsum.photos/200"
    };
    style = {
        fontSize: 20,
        fontWeight: "bold"
    }
    render() {
        return (
            <React.Fragment>
                <span style={this.style} className='badge badge-primary m-2'>{this.countOption()}</span>
                <button className='btn btn-secondary btn-sm'>Increament</button>
            </React.Fragment>
        );
    }
    countOption() {
        let num = this.state.count;
        return num === 0 ? 'Zero' : num;
    }
}

export default Counter;