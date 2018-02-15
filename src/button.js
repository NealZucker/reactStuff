//Using React's state, make a button that increments a counter
<<<<<<< HEAD
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
=======
//Display the number on the webpage
>>>>>>> 5a29a729e2b4a83f26d6ca888292c196573ae71a
