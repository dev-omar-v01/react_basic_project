
import React, { Component } from 'react'
import './index.css'
export default class state extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }
    handleIncrement = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    handleDicrement = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }
    
  render() {
    const {count} = this.state;
    return (
      <div>
       <h1> count : {count}</h1>
       <button onClick={this.handleIncrement}>+</button>
       <button onClick={this.handleDicrement} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}
