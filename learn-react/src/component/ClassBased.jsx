import React, {Component} from "react";

 class Counter extends Component{

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
      this.setState({count: this.state.count + 1})  
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})  
    }

    render() {
        return <>
            <h2> Counter (Class Based)</h2>
            <p>Count: {this.state.count}</p>
            {console.log("Count value => ", this.state.count)}
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </>
    }
 }

 export default Counter