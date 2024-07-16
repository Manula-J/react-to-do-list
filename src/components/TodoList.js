import React, { useState } from 'react'
import "./TodoList.css";

export default function TodoList() {

  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState("");
  const[deadline, setDeadline] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddTask = () => {
    if (input.trim()) {
      setTodos([...todos, [input, deadline]]);
      setInput("");
      setDeadline("");
    }
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_,i) => i !== index);
    setTodos(newTodos);
  }

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
    // console.log(e.target.value);
  }

  const calculateDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const timeDifference = deadlineDate - currentDate;
    const daysLeft = Math.ceil(timeDifference / (1000*60*60*24));
    console.log(daysLeft);
    return daysLeft
  }

  return (
    <div>
      <h1>To do List</h1>
      <div className='add-task'>
        <input type='text' value={input} onChange={handleInputChange} placeholder='Add a new task' className='task-input'/>
        <input type='date' value={deadline} onChange={handleDeadlineChange} className='due-date-input'/>
        <button className='btn-add-task' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li className='task-item' key={index}>
            <div className='task-details'> 
              <span className='task-name'>{todo[0]}</span>
              <span className='task-due'>
                {calculateDaysLeft(todo[1]) < 0 ? (
                  (calculateDaysLeft(todo[1])) * -1 === 1 ? (
                    "Due 1 day"
                  ) : (
                    "Due " + (calculateDaysLeft(todo[1])) * -1 +  " days"
                  )
                ) : (
                  calculateDaysLeft(todo[1]) === 0 ? (
                    "Today" 
                  ) : ( 
                    calculateDaysLeft(todo[1]) === 1 ? (
                      "1 day left"
                    ) : (
                      calculateDaysLeft(todo[1]) + " days left" )
                    )
                )}
                </span>
            </div>              
            <button onClick={() => handleDeleteTodo(index)} className='btn-delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
