import React, { useState } from 'react'

function Update_State() {

    const [counter, setCounter] = useState(0);

   const handleIncrement = () => {
    //setCounter get a function called which will increment the counter
        setCounter((prevCounter) => prevCounter + 1) //previous Counter with new counter increment value
        setCounter((prevCounter) => prevCounter + 1)

    };

    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
        setCounter((prevCounter) => prevCounter - 1);

    };

  return (
    
    <div>
        <div className="text-center text-2xl bg-black text-white">
    useState useing Update state with previous value
        </div>
        <h1 className='text-3xl mx-10 my-5'>Count : {counter}</h1>
        <button onClick={handleIncrement} className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'>Increase</button>
        <button onClick={handleDecrement} className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'>Decrease</button>

    </div>

)
}

export default Update_State