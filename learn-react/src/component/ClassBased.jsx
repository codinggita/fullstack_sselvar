import React, {Component} from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

 class Counter extends Component{

    constructor(props) {
        console.log("constructor")
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("ComponentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    increment = () => {
      this.setState({count: this.state.count + 1})  
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})  
    }

    render() {
        console.log("render")
        return <>
            <h2> Counter (Class Based)</h2>
            {/* <p>Count: {this.state.count}</p>
            {console.log("Count value => ", this.state.count)}
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button> */}
        </>
    }
 }

 export default Counter