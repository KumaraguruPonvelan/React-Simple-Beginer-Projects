import React from 'react';

const ToDo = ({todo, Togglecompletes, removetodo}) =>{
    return(
        <div style={{display:'flex', justifyContent:'space-between', margin:'5px, 0'}}>
            <div 
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            onClick={()=> Togglecompletes(todo.id)}>
                {todo.task}

            </div>
            <button onClick={() => removetodo(todo.id)}>Delete</button>
        </div>
    )
}
export default ToDo;