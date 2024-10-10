import React, { useState } from 'react'




function InputTodo(props) {
    const [todo, setTodo] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onInputTodos(todo);
        
    };
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleResetChange = (e) => {
        setTodo('');
    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo" className='text-2xl font-semibold'> Input new Todo: </label>
        <input type="text" className='px-4 py-2 bg-slate-200 text-black m-4 font-semibold rounded-sm' id='todo' name='todo' value={todo} onChange={handleChange}/>
        <button type="submit" className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'>Add Todo</button>
        <button className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm' onClick={handleResetChange}>Refresh</button>
    </form>
  )
}

export default InputTodo