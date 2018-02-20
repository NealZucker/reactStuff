import React, { Component } from 'react';
import "./Barf.css"


//Create another react component the same way as you did before
//This time, we're going to use this component WITHIN your other 
//component - that's right, we can nest components. In fact, you'll only 
//attach one component to an html tag - that is the entry point of your react. 
//ideally, you won't be doing anymore edits in html. Back to the component - Call it
// "Barf"

class Barf extends Component {
    constructor() {
        super();
    }
    render() {
        return <div><p>Hello World!</p>
        </div>
    }
}

export default Barf

//export it in this file, then import it into your index.js file and put the tag
//inside the div's in your render method and viola! Look at your hard work in the browser
//Let's build a react component from scratch

//step 1: build a class, call it w/e you want
//step 2: make it a subclass of "React.Component"
//step 3: give it a render() method
//step4: within the render method, return an opening
//and closing div tag. Wrap it withiin a set of parens
// Throw some html inside of there




//We're going to use this component WITHIN your other 
//component - that's right, we can nest components. 

//export it in this file, then import it into your App.js file and put the tag
//inside the div's somewhere in your render method and viola! 
//Look at your hard work in the browser
