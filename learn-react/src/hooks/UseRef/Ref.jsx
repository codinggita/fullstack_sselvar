import React, { useRef } from 'react'

const Ref = () => {
    const inputRef = useRef(null)

    const onChange = () => {
        console.log("inpuref value => ", inputRef.current.value)
        inputRef.current.value = ""
        console.log("after inpuref value => ", inputRef.current.value)
        inputRef.current.focus()
    }
  return (
    <div>
        <h1>UseRef</h1>
        <input type="text" placeholder='Type your name' ref={inputRef}/>
        <button onClick={onChange}> Click Here </button>
    </div>
  )
}

export default Ref
