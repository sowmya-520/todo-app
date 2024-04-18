import {useState} from 'react';
import React from "react";
import { useDispatch} from "react-redux";
import './TaskForm.css';
import { addToList } from './TaskSlice';
const TaskForm = () =>
{
    const dispatch = useDispatch();
    const [enteredTask,setEnteredTask]=useState('');
    const taskChangeHandler =(event)=>{
        setEnteredTask(event.target.value)
    }
    const addTaskHandler = (event) => {
        event.preventDefault();
        const taskId = Math.floor(Math.random() * 1000); 
        const taskData = {
            id: taskId,
            data: enteredTask
        };
        dispatch(addToList(taskData));
        setEnteredTask('');
    };
    
    return(
        <div>
            <form className='form-container' onSubmit={addTaskHandler} >
                <input type="text" placeholder="enter a newtask" onChange={taskChangeHandler} value={enteredTask} />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}
export default TaskForm;