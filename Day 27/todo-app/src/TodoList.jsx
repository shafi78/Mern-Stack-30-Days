import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const TodoList = () => {

    const [todos,setTodos] = useState([{task: "sample task", id:uuidv4()}]);
    const [newTodo,setNewTodo] = useState("");

    const addNewTodo = () => {
        setTodos([...todos,{task: newTodo,id: uuidv4()}]);
        setNewTodo("")
    }

    const updateTodoValue = (e) => {
        setNewTodo(e.target.value)
    }

  return (
    <div>
        <input type="text" placeholder='add a task' value={newTodo} onChange={updateTodoValue} />
        <br />
        <button onClick={addNewTodo}>Add Task</button>
        <br /><br /><br />
        <hr />
        <h4>Tasks</h4>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList