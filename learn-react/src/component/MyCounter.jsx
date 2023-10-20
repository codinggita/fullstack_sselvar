import { increment,decrement } from "../slice/CounterSlice"
import {useDispatch, useSelector} from "react-redux"

const MyCounter = () => {

    const dispatch = useDispatch()
    const countValue = useSelector((state) => state.myCounter.value)
    
    return <>
    <h1>Counter</h1>
    <p>Count value: {countValue}</p>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    </>
}

export default MyCounter