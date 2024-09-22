import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }
handleIncrement = () => {
    this.setState({
        count: this.state.count + 1,
    })
};

handleDecrement = () => {
    this.setState({
        count: this.state.count - 1
    })
}
  render() {
    const {count} = this.state;
    return (
        <div className=' w-[250px] h-[250px] m-auto '>
            <h1 className='text-3xl mx-10 my-5'>Count: {count}</h1>
            <div>
            <button className='p-3 bg-black text-white border-r-2 ' onClick={this.handleIncrement}> Increment</button>
            <button className='p-3 bg-black text-white border-r-2' onClick={this.handleDecrement}> Increment</button>
            </div>
            
        </div>
      
    )
  }
}
