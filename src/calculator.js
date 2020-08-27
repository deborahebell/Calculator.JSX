import React, { Component } from 'react';
import App from './App';

class myCalc extends Component {
    constructor(props) {
        super();
        this.state = {
            CalcArray: props.myCalc,
            num1: "",
            num2: "",
        };
    }
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

 render() {
    return (
        <div className="container">
            <h1>Add with React!</h1>

            <div className="add">
            <input type="text" />
            <span>+</span>
            <input type="text" />
            <button>=</button>
            <h3>Addition results go here!</h3>
            </div>
        </div>
)}
    export default myCalc;

