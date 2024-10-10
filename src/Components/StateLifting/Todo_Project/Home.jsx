import React, { useState } from 'react'
import Todos from './Todos';
import InputTodo from './InputTodo';


const DummyTodoArray = [
      
]

function home() {
  const [todos, setTodos] = useState(DummyTodoArray);

  const handleInputTodos =(newTodos) => {
    setTodos([...todos, newTodos]);
  }

  return (
    <div>
      <p>home page...</p>
      <InputTodo onInputTodos={handleInputTodos}/>
      <Todos todos = {todos} />
      </div>
  )
}

export default home ;