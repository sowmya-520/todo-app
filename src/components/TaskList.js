import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromList } from "./TaskSlice";
import "./TaskList.css";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasklist);
//   retrieving the task data from store
  const deleteHandler = (id) => {
    dispatch(removeFromList(id));
  };

  return (
    <div className="container">
      {tasks.length === 0 ? (
        <h1>No tasks</h1>
      ) : (
        <div className="grid">
          {tasks.map((task) => (
            <div key={task.id} className="category-container">
              <p className="category-name">{task.data}</p>
              <button onClick={() => deleteHandler(task.id)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
