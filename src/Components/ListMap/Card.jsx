import React from 'react'

export default function Card(props) {
    const {name, address,selary} = props
  return (
    <div className='w-[300px] flex flex-col justify-center' >
    <ul className='bg-neutral-600 text-white m-2 text-xl'>  
       <li className='text-center m-5 '>
         <h1 className=''>Name: {name}</h1>
         <h1 className='mx-3'> Address: {address}</h1>
         <h1 className=''>Selary: {selary}</h1>
       </li>
    </ul>
    </div>

  )
}
