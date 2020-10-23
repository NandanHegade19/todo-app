import React, { useState } from 'react';
import Form from './Form'
import './App.css';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])
  const [errorMsg, setErrorMsg] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('')
    if(inputVal.trim() === ""){
      setErrorMsg("Todo item cannot be empty")
      return
    } //prevents null text addition 
    setTodos([...todos, {todoText: inputVal, todoId: uuidv4()}])
    setInputVal("")
  }

  const closeTodo = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.todoId !== id)) //gets all items removes item with id and returns
  }
  return (
    <div className="App">
      <div className = "container">
        <Form inputVal = {inputVal} setInputVal = {setInputVal} handleSubmit = {handleSubmit}/>
        <p className = "errorMsg">{errorMsg}</p>
        <TodoItem todos = {todos} closeTodo = {closeTodo}/>
      </div>
    </div>
  );
}

export default App;
