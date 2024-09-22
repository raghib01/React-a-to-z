import React, { Component } from 'react'

export default class EventHandlerC extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : '',
         isToggleOn: true
      }
    }

handleOnChange = (e) => {
    this.setState({
        changeValue: e.target.value
    },() => {
        console.log('Change Value: ', this.state.changeValue)
      });
}

handleClick= () => {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
}

    render() {
    return (
      <div>
        <form className='flex justify-center items-center'>
            <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id='text' 
            placeholder="Type ..."
            onChange={this.handleOnChange}
            />
        
            <button 
            className='px-4 py-2 bg-rose-700 text-white m-4 font-semibold rounded-sm'
            onClick={this.handleClick} //this because its class
            >{this.state.isToggleOn ? 'Submit':'Rooling'}
            </button>
            
        </form>
        <h1 className='m-6'>{this.state.changeValue}</h1>
      </div>
    )
  }
}
