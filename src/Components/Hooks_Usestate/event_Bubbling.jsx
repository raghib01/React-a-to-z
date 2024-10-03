import React from 'react'

export default function event_Bubbling() {

    const handleParent = (e) => {
        console.log('Parent Clicked :', e);
    }

    const handleChiled = (e) => {
        e.stopPropagation();  // This will stop the event from bubbling up to the parent element.
        console.log('Chiled Clicked :', e);
        
    }

  return (
    <div className='bg-black text-white ' onClick={handleParent}>
        <h1 className='text-3xl'>Parent Element</h1>
        <button 
        className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'
        onClick={handleChiled}
        >Chiled event</button>
    </div>
  )
}
