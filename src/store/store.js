import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from '../components/TaskSlice';

export const store = configureStore({
    reducer:{
      
          task:taskReducer,
    },
});
export default store;