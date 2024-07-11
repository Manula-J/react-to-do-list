import React, { useState } from 'react'

export default function TodoList() {

  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddTask = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_,i) => i != index);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>To do List</h1>
      <input type='text' value={input} onChange={handleInputChange} placeholder='Add a new task' />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
