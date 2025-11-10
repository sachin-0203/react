import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk("user/fetchUsers", async(id,{rejectWithValue}) =>{

  try{
    const userId = id || Math.floor(Math.random()*12 + 1);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    return response.data;

  }
  catch(error){
    return rejectWithValue(error.response?.data || "No user found")
  }
})

export const fetchAllUsers = createAsyncThunk( "user/fetchAllUsers", async(_,rejectWithValue)=>{
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
  catch(error){
    return rejectWithValue(error.response?.data || "No Users found")
  }
})

const initialState = {
  user : {
    id : null,
    name : '',
    username: '',
    email : '',
    phone : '',
    address : ''
  },
  userList: [{
    name: '',
    username : '',
    email : ''
  }],
  status : 'initial',
  error : null
}

const userSlice = createSlice({
  
  name : 'user',
  
  initialState,
  
  reducers : {
    clearUser : (state)=>{
      state.user = null
      state.status = 'initial'
      state.error = null
    }
  },

  extraReducers : (builder)=>{

    // fetch One User 
    builder
    .addCase(fetchUsers.pending, (state)=>{
      state.status = 'Loading';
      state.userList = null;
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action)=>{
      state.status = 'Success';
      state.user = action.payload;
    })
    .addCase(fetchUsers.rejected, (state,action)=>{
      state.status = 'Failed';
      state.userList = null;
      state.error = action.payload;
    })


    // fetch All Users
    builder
    .addCase(fetchAllUsers.pending , (state)=>{
      state.status = 'Loading';
    })
    .addCase(fetchAllUsers.fulfilled, (state,action) =>{
      state.status = 'Success';
      state.userList = action.payload;
    })
    .addCase(fetchAllUsers.rejected , (state,action)=>{
      state.status = 'Failed';
      state.error = action.payload;
    })

  }


})



export const  { clearUser } = userSlice.actions;
export default userSlice.reducer;