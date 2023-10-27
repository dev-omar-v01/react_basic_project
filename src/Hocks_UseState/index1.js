import React, { Component } from 'react'

export default class Hocks_UseState extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  handleClick =()=>{
    this.setState({
        count : this.state.count + 1
    })
  }
  
  
    render() {
    return (
      <div>

      <h1>{this.state.count}</h1>
        
        <button onClick={this.handleClick}>increse</button>
      </div>
    )
  }
}
