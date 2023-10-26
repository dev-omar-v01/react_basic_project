import React, { Component } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default class Conditional_Rendering extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLogin: false
  }
}


  render() {
     
    const {isLogin} = this.state
  return (
    <div>
         {isLogin ?  <LoginPage />: <HomePage />}
    </div>
  );
      

    
  }
}
