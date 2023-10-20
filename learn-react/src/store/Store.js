import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "../slice/CounterSlice"

const initialState = {
    myCounter: {
        value: 2
    }
}

const Store = configureStore({
    reducer: {
        myCounter: CounterReducer
    },
    preloadedState: initialState
})

export default Store