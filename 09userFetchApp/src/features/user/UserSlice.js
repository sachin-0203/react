import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk("user/fetchUsers", async(_,{rejectWithValue}) =>{

  try{
    const userId =  Math.floor(Math.random()*12 + 1);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    return response.data;

  }
  catch(error){
    return rejectWithValue(error.response?.data || "No user found")
  }
})

export const fetchUserById = createAsyncThunk("user/fetchUserById", async(id,{rejectWithValue}) =>{

  if (!id) {
    return rejectWithValue("User ID cannot be empty");
  }
  try{
    const userId = id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    console.log("res", response)
    return response.data;

  }
  catch(error){
    return rejectWithValue("No user found")
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
    name : "",
    username: '',
    email : '',
    phone : '',
    address: {
      street: "",
      city: "",
    },
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
      state.user = {
        id : null,
        name : "",
        username: '',
        email : '',
        phone : '',
        address: {
          street: "",
          city: "",
        },
      }
      state.userList = [{
        name: '',
        username : '',
        email : ''
      }]
      state.status = 'initial'
      state.error = null
    }
  },

  extraReducers : (builder)=>{

    // fetch One User 
    builder
    .addCase(fetchUsers.pending, (state)=>{
      state.status = 'Loading';
      state.userList = [{
        name: '',
        username : '',
        email : ''
      }]
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action)=>{
      state.status = 'Success';
      state.user = action.payload;
    })
    .addCase(fetchUsers.rejected, (state,action)=>{
      state.status = 'Failed';
      state.userList = [{
        name: '',
        username : '',
        email : ''
      }]
      state.error = action.payload;
    })


    builder
    .addCase(fetchUserById.pending, (state)=>{
      state.status = 'Loading';
      state.userList = [{
        name: '',
        username : '',
        email : ''
      }];
      state.user = {
        id : null,
        name : "",
        username: '',
        email : '',
        phone : '',
        address: {
          street: "",
          city: "",
        },
      };
      state.error = null;
    })
    .addCase(fetchUserById.fulfilled, (state, action)=>{
      state.status = 'Success';
      state.user = action.payload;
    })
    .addCase(fetchUserById.rejected, (state,action)=>{
      state.status = 'Failed';
      state.userList = [{
        name: '',
        username : '',
        email : ''
      }];
      state.error = action.payload || action.error.message;
    })


    // fetch All Users
    builder
    .addCase(fetchAllUsers.pending , (state)=>{
      state.status = 'Loading';
      state.error = null
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