import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRandomUser = createAsyncThunk("user/fetchUsers", async(_,{rejectWithValue}) =>{

  try{
    const userId =  Math.floor(Math.random()*10 + 1);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    return response.data;

  }
  catch(error){
    return rejectWithValue("No user found")
  }
})

export const fetchUserById = createAsyncThunk("user/fetchUserById", async(id,{rejectWithValue}) =>{

  if (!id) {
    return rejectWithValue("Please enter a user Id");
  }
  try{
    const userId = id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;

  }
  catch(error){
    return rejectWithValue("No user found with this id")
  }
})

export const fetchAllUsers = createAsyncThunk( "user/fetchAllUsers", async(_,{rejectWithValue})=>{
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
  catch(error){
    return rejectWithValue(error.response?.data || "No Users found")
  }
})

const initialState = {
  user : null,
  userList: [],
  selectedUserId: null,
  status : 'idle',
  error : null
}

const userSlice = createSlice({
  
  name : 'user',
  
  initialState,
  
  reducers : {
    clearUser : (state)=>{
      state.user     = null;
      state.userList = [];
      state.status   = 'idle';
      state.error    = null;
      state.selectedUserId = null;
    },
  },

  extraReducers : (builder)=>{


    // fetch One User 
    builder
    .addCase(fetchRandomUser.pending, (state)=>{
      state.status   = 'loading';
      state.userList = [];
      state.error    = null;
    })
    .addCase(fetchRandomUser.fulfilled, (state, action)=>{
      state.status = 'succeded';
      state.user   = action.payload;
      state.selectedUserId = action.payload.id; 
    })
    .addCase(fetchRandomUser.rejected, (state,action)=>{
      state.status = 'failed';
      state.error  = action.payload;
    })


    builder
    .addCase(fetchUserById.pending, (state)=>{
      state.status   = 'loading';
      state.userList = [];
      state.error    = null;
    })
    .addCase(fetchUserById.fulfilled, (state, action)=>{
      state.status = 'succeded';
      state.user   = action.payload;
      state.selectedUserId = action.payload.id;
    })
    .addCase(fetchUserById.rejected, (state,action)=>{
      state.status = 'failed';
      state.error  = action.payload || "failed to fetch user by ID";
    })


    // fetch All Users
    builder
    .addCase(fetchAllUsers.pending , (state)=>{
      state.status = 'loading';
      state.error  = null;
    })
    .addCase(fetchAllUsers.fulfilled, (state,action) =>{
      state.status   = 'succeded';
      state.userList = action.payload;
    })
    .addCase(fetchAllUsers.rejected , (state,action)=>{
      state.status = 'failed';
      state.error  = action.payload || "failed to fetch users";
    })

  }


})



export const  { clearUser } = userSlice.actions;
export default userSlice.reducer;