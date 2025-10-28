import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { 
  count : 0,
  status: "idle",
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
      })
      .addCase(incrementAsync.fulfilled, (state,action) =>{
        state.status = "success";
        state.count += action.payload;
      })
      .addCase(incrementAsync.rejected, (state)=>{
        state.status = "failed";
      })
  }
})

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (delay = 1000)=>{
    await new Promise((resolve) => setTimeout(resolve,delay));
    return 1;
  }
)

export const {addVal, delVal, resVal, cusAdd, cusSub}  = counterSlice.actions;
export default counterSlice.reducer;

