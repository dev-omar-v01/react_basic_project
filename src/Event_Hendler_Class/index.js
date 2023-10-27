import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react'

export default class Event_Hendler_Class extends Component {
 
   constructor(props) {
     super(props)
   
     this.state = {
        changeValue : ""
     }
   }
   
    handleOnChange =(e)=>{
        this.setState({
            changeValue : e.target.value
        },()=>{
            console.log(this.state.changeValue)
        })
    }
 
    render() {
    return (
      <div>
       
        <input type="text" onChange={this.handleOnChange}></input>
        <h1>{this.state.changeValue}</h1>
      </div>
    )
  }
}
