import { useState } from "react";

function CounterFunctional() {
    let [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevValue) => prevValue + 1)
      }
  
    const decrement = () => {
        setCount((prevValue) => prevValue - 1)
      }
  
    return <>
          <h2> Counter (Functional)</h2>
            <p>Count: {count}</p>
            {console.log("Count value => ", count)}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
    </>
}

export default CounterFunctional;