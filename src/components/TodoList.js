import React, { useState } from 'react'
import "./TodoList.css";

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
    const newTodos = todos.filter((_,i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>To do List</h1>
      <div className='add-task'>
        <input type='text' value={input} onChange={handleInputChange} placeholder='Add a new task' />
        <button className='btn-add-task' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li className='task-item' key={index}>{todo}
          <button onClick={() => handleDeleteTodo(index)} className='btn-delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
