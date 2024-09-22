import React from 'react'

/**
export default function Class(props) {
    const name = props.name
  return (
    <div className='text-2xl '>
        {name}
    </div>
  )
}
*/

class ClassCompnents extends React.Component{
    render(props) {
        return(
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default ClassCompnents