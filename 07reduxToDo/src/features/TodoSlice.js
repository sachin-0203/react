import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:3001'

const initialState = {
  todos: []
}

export const addTodoAsync = createAsyncThunk("todo/addTodoAsync", async(title)=>{
  const res = await fetch(`${BASE_URL}/todos`, 
    {
      method : 'POST',
      headers : { "Content-Type" : "application/json" },
      body : JSON.stringify({title : title, completed:  false}),
    }
  )
  return await res.json();
})

export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers : {
    addTodo : (state,action)=>{
      const todo = {
        id : nanoid(),
        text : action.payload,
        completed : false
      }
      state.todos.push(todo)
    },
    removeTodo : (state,action)=>{
      state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    },
    updateTodo : (state,action)=>{
      const {id ,text} = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if(todo) todo.text = text;
    },
    completedTodo : (state,action)=>{
      const id = action.payload;
      const todo = state.todos.find(todo=> todo.id === id);
      if(todo) todo.completed = !todo.completed;
    }
  },
  extraReducers : (builder) => {
    builder
    .addCase(addTodoAsync.pending , (state,action)=>{
      
    })
    .addCase(addTodoAsync.fulfilled, (state,action)=>{
      const todo = {
        id : nanoid(),
        text: action.payload,
        completed : false,
      }
      state.todos.push(todo);
    })
  }
})



export const {addTodo , removeTodo, updateTodo, completedTodo} = todoSlice.actions

export default todoSlice.reducer