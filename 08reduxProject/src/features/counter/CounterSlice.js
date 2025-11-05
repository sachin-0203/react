import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  count : 0,
  status: "idle",
  name : "",
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addVal : (state)=>{
      state.count += 1;
    },

    delVal : (state)=>{
      if(state.count > 0)
        state.count -= 1;
    },

    resVal : (state)=>{
      state.count =0;
    },

    cusAdd : (state,actions)=>{
      state.count += actions.payload;
    },

    cusSub : (state,actions)=>{
      state.count -= actions.payload;
    }

  },

  extraReducers : (builder)=>{
    builder
      .addCase(incrementAsync.pending  , (state)=>{
        state.status = "loading";
        state.name = ""
      })
      .addCase(incrementAsync.fulfilled, (state,action) =>{
        state.status = "success";
        state.name = action.payload.name;
      })
      .addCase(incrementAsync.rejected, (state)=>{
        state.status = "failed";
      })
  }
})

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (delay = 1000)=>{
    const num = Math.floor( Math.random()*10 ) + 1;

    const response = await  fetch(`https://jsonplaceholder.typicode.com/users/${num}`);
    const data = await response.json();
    return data;
  }
)

export const {addVal, delVal, resVal, cusAdd, cusSub}  = counterSlice.actions;
export default counterSlice.reducer;

