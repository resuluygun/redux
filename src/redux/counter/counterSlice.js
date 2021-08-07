import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 2
    },
    reducers : {  //the methods which operate on the current Slice
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment : (state) => {
 
            state.value++;
        },
        decrement : (state) =>{
            state.value--;
        },
        incrementByAmount : (state, action) =>{
            console.log(action);
            state.value += action.payload;
        }
    },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
    