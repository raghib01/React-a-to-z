import React from 'react'
import TodoData from './TodoData'

function Todos(props) {
    console.log(props.todos)
  return (
    
    <div>
        <h1 className='text-4xl font-sans font-bold m-3'>Add Todos : </h1> 
        {
            props.todos.map((todos, index) => (
                <TodoData key={index}  todo = {todos}/>
            ))
        }
    </div>
  )
}

export default Todos