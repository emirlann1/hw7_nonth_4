import React, { useState } from 'react';
import TodoItem from './TodoItem.js';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.todo.value;
    setTodos([...todos, newTodo]);
    event.target.todo.value = '';
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add Todo" />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} handleDelete={() => handleDeleteTodo(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
