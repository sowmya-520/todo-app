import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasklist: [],
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.tasklist.push(action.payload);
      
    },
    removeFromList: (state, action) => {
      state.tasklist = state.tasklist.filter(
        (item) => !(item.id === action.payload)
      );
    },
  },
});

export const { addToList, removeFromList } = TaskSlice.actions;

export const taskReducer = TaskSlice.reducer;
