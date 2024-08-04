import React, { useState } from 'react';

const ToDoform = ({addToDo}) =>{
    const [task, setTask]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
          addTodo(task);
          setTask('');
        }
      };



   return(
    <div>
        <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
    </div>
   )
};
export default ToDoform