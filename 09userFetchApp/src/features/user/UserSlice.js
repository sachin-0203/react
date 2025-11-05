import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk("user/fetchUsers", async(id,{rejectWithValue}) =>{

    try{

      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      return response.data;

    }
    catch(error){
      return rejectWithValue(error.response?.data || "No user found")
    }
  }
)

const initialState = {
  user : {
    name : '',
    username: '',
    email : '',
    phone : '',
    address : ''
  },
  status : 'idle',
  error : null
}

const userSlice = createSlice({
  
  name : 'user',
  
  initialState,
  
  reducers : {},

  extraReducers : (builder)=>{
    builder
    .addCase(fetchUsers.pending, (state)=>{
      state.status = 'Loading...';
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action)=>{
      state.status = 'Succeeded';
      state.user = action.payload; 
    })
    .addCase(fetchUsers.rejected, (state,action)=>{
      state.status = 'Failed';
      state.error = action.payload;
    })
  }

})

export default userSlice.reducer;