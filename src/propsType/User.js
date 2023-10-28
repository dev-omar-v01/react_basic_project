/* eslint-disable react/no-typos */
import React from 'react';

import  PropTypes  from 'prop-types';
export default function User(props) {
  return (
    <div>
    <h1>{props.userName}</h1>
    <h3>{props.userId}</h3>
      
    </div>
  );
 
};
User.PropTypes = {
    userName : PropTypes.string
    //user:props.object.isRequire;
    //user:props.object.shap({userName : PropTypes.string});
};
User.DefaultProps ={
    userName : "oor",
    userId: 0

}
