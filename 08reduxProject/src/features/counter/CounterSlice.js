import { createSlice } from "@reduxjs/toolkit";

const initialState = { count : 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addVal : (state)=>{
      state.count += 1;
    },

    delVal : (state)=>{
      state.count -= 1;
    },

    resVal : (state)=>{
      state.count =0;
    },

    cusVal : (state,actions)=>{
      state.count += actions.payload;
    },

  }
})

export const {addVal, delVal, resVal, cusVal}  = counterSlice.actions;
export default counterSlice.reducer;

