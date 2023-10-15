import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {
    const [data, setData] = useState()
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data)
        })
    },[])

    const findLongestName = (comments) => {

        if(comments != null) {
            let longestName = comments[0].name
            for(let i = 1; i < comments.length; i++){
                let currentName = comments[i].name
                if(currentName.length > longestName.length) {
                    longestName = currentName
                }
            }
            console.log("This is called")
            return longestName
        }
        
        return null
    }

// const getLongestName = () => findLongestName(data)

const getLongestName = useMemo(() => findLongestName(data),[data])
  return (
    <div>
        {/* <h1>{getLongestName()}</h1> */}
        <h1>{getLongestName}</h1>
      <button onClick={() => {
        setToggle(!toggle)
      }}> Toggle </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  )
}

export default Memo
