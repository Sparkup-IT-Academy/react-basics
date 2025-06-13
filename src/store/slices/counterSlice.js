import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        number: 10,
    },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        increaseBy5: (state) => {
            state.count = state.count + 5;
        },
        increaseBy: (state, action) => {
            state.count = state.count + action.payload;
        }
    }
})

export const { increment, decrement, increaseBy5, increaseBy } = counterSlice.actions;

export default counterSlice.reducer;