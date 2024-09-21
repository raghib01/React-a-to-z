import React from 'react'


const booksData = [
    {
        id: '1',
        title: 'Genetics',
        Description: 'disscussion about Human Gene',
        price: '534 tk'
    },
    {
        id: '2',
        title: 'Cytology',
        Description: 'disscussion about cell cytology',
        price: '234 tk'
    },
    {
        id: '3',
        title: 'Moliculer Biology',
        Description: 'disscussion about cell molecules and inside of cell structure DNA & RNA structure',
        price: '567 tk'
    },

]



export default function list() {
    
  return (
    <div>
      {booksData.map((book)=>{
        
        return (
          <div key={book.id} className='w-1/2 flex flex-col justify-center'> 
            <ul  className='bg-neutral-600 text-white m-2 text-xl'>
            <li >
              <h3 className='text-2xl text-semibold'>{book.title}</h3>
              <p>{book.Description}</p>
              <p>{book.price}</p>
            </li>
          </ul>
          </div>
        )
      })}
    </div>
  )
}
