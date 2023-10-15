import React,{ useReducer, useState } from "react"

const reducer = (state, action) => {
    switch(action.type) {
        case "Increment":
            return {count: state.count + 1, showText: state.showText}
        case "Toggle":
            return {count: state.count, showText: !state.showText}
        default:
            return state
    }
}

const Reducer = () => {

    // const [count, setCount] = useState(0)
    // const [showText, setShowText] = useState(true)
    // const onChangeValue = () => {
    //     setCount(count + 1)
    //     setShowText(!showText)
    // }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true
    })

    const onChangeValueUsingReducer = () => {
        dispatch({type: "Increment"})
        dispatch({type: "Toggle"})
    }

    return (
        <div>
            <h1>{state.count}</h1>
            {/* <button onClick={onChangeValue}>Click here</button> */}
            <button onClick={onChangeValueUsingReducer}>Click here</button>
            {state.showText && <p> Show Count: {state.count} </p>}
        </div>
    )
}

export default Reducer