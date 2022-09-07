import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() {
        return (
            <React.Fragment>
                <span className={this.spanClass()}>{this.countOption()}</span>
                <button className='btn btn-secondary btn-sm'>Increament</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    spanClass() {
        let classs = "badge m-2 badge-";
        classs += this.state.count === 0 ? "warning" : "primary";
        return classs;
    }

    countOption() {
        let num = this.state.count;
        return num === 0 ? 'Zero' : num;
    }
}


export default Counter;