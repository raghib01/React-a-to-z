import React from 'react'

function TodoData(props) {
  return (
    <div>
        <p className='bg-black text-white font-serif font-semibold text-2xl m-3'>
             {props.todo}
        </p>
    </div>
  )
}

export default TodoData