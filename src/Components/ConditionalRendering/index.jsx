import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false 
      }
    }
    //
  render() {
    const {isLoggedIn} = this.state
    //Render With If else elements
    /** 
    let element
    if(isLoggedIn){
        element = <Home />
    }else{
        element = <Login />
    }
    

    return(
        <div>
            {element}
        </div>
     )
*/

    //Render With Ternary operator
/*
    return(
        <div>
            {isLoggedIn? <Home /> : <Login />}
        </div>
     )
*/ 

    //Render With Short Circuit Evaluation
    return (
        <div>
            {isLoggedIn && <Home />}
            {!isLoggedIn && <Login /> }
        </div>
    )
        
      }
}
