// mark as done 


import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const TodoHomeWork  = () => {

    const [todos,setTodos] = useState([{task: "sample task", id:uuidv4(), isDone: false}]);
    const [newTodo,setNewTodo] = useState("");

    const addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos,{task: newTodo,id: uuidv4(), isDone: false}]
        });
        setNewTodo("")
    }

    const updateTodoValue = (e) => {
        setNewTodo(e.target.value)
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    }


    // marking all elements in array

    const markAsDoneAll = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            }
        })
    )
    }


    const markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
            
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
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
                        <span style={todo.isDone ? {textDecoration: "line-through"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))
            }
        </ul>
        <br /><br />
        <button onClick={markAsDoneAll}>Mark All as Done</button>
    </div>
  )
}

export default TodoHomeWork ;