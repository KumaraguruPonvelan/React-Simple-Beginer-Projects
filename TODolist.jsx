import React from 'react';
import Todo from './ToDo';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;