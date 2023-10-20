import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: "my_counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;