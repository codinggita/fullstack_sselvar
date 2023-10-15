import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'

// render -> uselayouteffect -> useeffect 
const Effect = () => {
    const [data, setData] = useState("Data")
    const [count, setCount] = useState(0)

    console.log("Effect => ", count, data)

    // this will have dependecy arrays
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[count].name)
            console.log(response.data[count].name)
        })
    },[count])

    useLayoutEffect(() => {
        // this will be executed before UseEffect
    }, [])


    return (
    <div>
        <h1>UseEffect</h1>
        <h1>{data}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>Click here</button>
        <h1>{count}</h1>
    </div>
    )
}


export default Effect
