//Using React's state, make a button that increments a counter
import React, { Component } from 'react';

export default class Button extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            counter:this.state.counter + 1
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.counter}</button>
            </div>
        )
    }
}