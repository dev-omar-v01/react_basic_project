import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props);
      console.log("constrator");

    
      this.state = {
        count : 0
         
      }

    }
    handleIncrement =()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;

    }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Coutn :{this.state.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    )
  }
}
