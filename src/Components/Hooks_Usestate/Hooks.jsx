import React, { useState } from 'react'

export default function Hooks() {

    // useState Hook
  const [count, setCount] = useState(0);

 const handleInc = () => {
    setCount(count + 1) // 1 + 1 = 1
    //not effective way to handle
  }
 const handleDec = () => {
    setCount(count - 1)
  }

  return (
    <div className=''>
    <div className='text-center bg-black text-white'>
        <h1 >Using Hooks in React</h1>
         <p>React Hooks are a new feature in React 16.8.0 that allows you to use state and other React features without writing a class.</p>
        <p>Some common hooks include useState, useEffect, and useContext.</p>
    </div>
      

      <h1 className='text-3xl mx-10 my-5'>Count : {count}</h1>
      <button onClick={handleInc} className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'>Increment</button>
      <button onClick={handleDec} className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'>Decrement</button>


    </div>
  )
}
