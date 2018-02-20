import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import BarfTwo from "./Barf.js";
import App from "./App.js"
import Barf from "./barf/Barf.js"
import Ex1 from "./ex1.js"
import "./barf/Barf.css"
import App2 from "./lifecycle.js"
import Button from "./button.js"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar2 from "./navbar.js"
import WeatherComponent from "./Weather.js"
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
    };
    render() {
        return (
            <div>
                <div>Test Test Test
                    <Barf/>
                    <App/>
                    <Ex1/>
                    <App2/>
                    <Button/>
                    <Navbar2/>
                    <WeatherComponent />
                </div>
            </div>
        );
    };
};

//we need to get this puppy working with the html. Below is a way to 
//inject a component into html
ReactDOM.render(<MyClass />, document.getElementById("root"));
//step 4: insert your class name where it says "insert class here". Find the index.html file (in ../public)
//and select an html id to attach your react app to.
//the second arg of ReactDOM.render is your familiar document.getElementById(). Use the id you just
//selected. 
//Your app should refresh itself - check it out, in theory you got a working react 
//component

//First, we need to get our application injected into an html page
//create-react-app does this for you by default, but it's good to know
//how it works. You might need to customize it some day. 


//step1: import the App from App.js, and put the imported variable into
//the curly brackets below where it says "Insert Class Here"

//step2: find your index.html file (it was built from create-react-app), select
//an id on an element, and pass it as a string into getElementById below

//ReactDOM.render(< {Insert Class Here} />, document.getElementById());

//Check out the App. Hopefully, you at least have a different error message
//You can pass in whatever component you want to. By default, create-react-app 
//passes the App component as your entry point. Keep in mind, you typically
//won't run ReactDOM.render any other time - it's only used to inject your 
//WHOLE APP (not a component) into html

