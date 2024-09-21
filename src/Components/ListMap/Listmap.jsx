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
    const Books = booksData.map(book=>{
        const booksText = `${book.title}  - ${book.price}`
        return <li>{booksText}</li>
    })

  return (
    <div className='bg-slate-500 text-white'>  
       <ul className='flex flex-col justify-center items-center mt-10 font-semibold'>
         {Books}
       </ul>
    </div>
  )
}
