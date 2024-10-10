import React from 'react'

const Child = (props) => {

    //Object can Working :

     
    const ChildData = [
        {
            id: 1,
            name: 'John',
            age: 25,
            country: 'USA'
        },
        {
            id: 2,
            name: 'Doe',
            age: 30,
            country: 'UK'
        }
    ]
    
    
    // const ChildData = 'Its Child Data going to Prents data.. // Bottom to Top Approch'


    props.onChildren(ChildData);

  return (
    <div>
         its Children Components...
    </div>
  )
}

export default Child

