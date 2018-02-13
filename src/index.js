import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import BarfTwo from "./Barf.js";
import App from "./App.js"
import Barf from "./barf/Barf.js"
import Ex1 from "./ex1.js"
//Lets build yer first react component! Woo hoo!!!!!
//At it's essence a react 'component' is simply a
//function that has a render method that returns the following:
//(
//  <div>
//  </div>
//)

//that's it, really. So lets make one
//step 1: build a class, call it w/e you want
//step 2: make it a subclass of "React.Component"
//step 3: give it a render() method
//step4: within the render method, return an div tag. Throw some html inside of there
//BUT IT STILL WONT WORK
class MyClass extends React.Component {
    constructor() {
        super();
        this.state = {dog: "Woof"};
        //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return <div>Test Test Test
            <Barf />
            <App />
            <Ex1 />
            </div>
    }
}

//we need to get this puppy working with the html. Below is a way to 
//inject a component into html
ReactDOM.render(< MyClass />, document.getElementById("root"));
//step 4: insert your class name where it says "insert class here". Find the index.html file (in ../public)
//and select an html id to attach your react app to.
//the second arg of ReactDOM.render is your familiar document.getElementById(). Use the id you just
//selected. 
//Your app should refresh itself - check it out, in theory you got a working react 
//component
