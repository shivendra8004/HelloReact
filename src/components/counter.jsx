import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        imgUrl: "https://picsum.photos/200"
    };
    render() {
        return (
            <React.Fragment>
                <span className='badge badge-primary m-2'>{this.countOption()}</span>
                <button className='btn btn-secondary btn-sm'>Increament</button>
                {/* <img src={this.state.imgUrl} alt="" /> */}
            </React.Fragment>
        );
    }
    countOption() {
        let num = this.state.count;
        return num === 0 ? 'Zero' : num;
    }
}

export default Counter;