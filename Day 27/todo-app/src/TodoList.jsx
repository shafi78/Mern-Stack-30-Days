import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const TodoList = () => {

    const [todos,setTodos] = useState([{task: "sample task", id:uuidv4()}]);
    const [newTodo,setNewTodo] = useState("");

    const addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos,{task: newTodo,id: uuidv4()}]
        });
        setNewTodo("")
    }

    const updateTodoValue = (e) => {
        setNewTodo(e.target.value)
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    }


    // updating all elements in array

    const upperCaseAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            }
        })
    )
    }


    const upperCase = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                }
                
                else {
                    return todo ;
                }
        })
    )
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
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => upperCase(todo.id)}>UpperCase</button>
                    </li>
                ))
            }
        </ul>
        <br /><br />
        <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  )
}

export default TodoList