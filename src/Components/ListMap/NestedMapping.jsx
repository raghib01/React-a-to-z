import React from 'react'


const Users = [
    {
        id: '1',
        fullName: 'Rakibul Islam',
        age: 28,
        email: 'rakibul@gmail.com',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001'
        },
        phone: [
            {
                home: '01715951768'
               
            },
            {
                work: '01987291872'
            },
        ],
    
    },
    {
        id: '2',
        fullName: 'Ebadul Islam',
        age: 25,
        email: 'ebad@gmail.com',
        address: {
            street: 'Barishal Sadar',
            city: 'Sadar',
            state: 'Barishal',
            zip: '10001'
        },
        phone: [
            {
                home: '01715951768'  
            },
            {
                work: '01987291872'
            },
        ],
    
    },
]

export default function NestedMapping() {
  return (
    
    <div>
       <h1 className='text-3xl font-bold text-black m-3 text-center'>Nested mapping in list data items</h1>
        {Users.map((User)=> 
            <div className='w-1/2 flex flex-col justify-center'>
                <div className='bg-neutral-600 text-white m-2 text-xl'  key={User.id} >
                    <h3>FullName:  {User.fullName}</h3>
                    <p>Age: {User.age}</p>
                    <p>Email: {User.email}</p>
                    <p> address : {User.address.city}</p>
                    {
                        User.phone.map((userPhone, number)=> 
                            
                            <div key={number}>
                            <p>Home: {userPhone.home}</p> 
                            <p>Work: {userPhone.work}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )}
    </div>
  )
}
