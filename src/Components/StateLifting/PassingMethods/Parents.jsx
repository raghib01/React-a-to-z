import React from 'react'
import ChildComponent  from './Child'


export const Parents = () => {

  const handleChildren = (ChildData) => {  
    console.log(ChildData)
  }
  
  
  return (
    <div>
        <ChildComponent onChildren={handleChildren}/>
    </div>
  )
}
