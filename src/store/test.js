
import { createSlice } from '@reduxjs/toolkit';

export const sliceName = 'test'

const { reducer: TestReducer, actions } = createSlice({
  name: sliceName,
  initialState: {
    todoList: []
  },
  reducers: {
    addTodoList: (state, action) => {
      state.todoList.push(action.payload)
    }
  }
})

export const { addTodoList } = actions;
export default TestReducer