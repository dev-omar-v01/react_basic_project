import React from 'react';


function Welcome(){
    return React.createElement("h1",{},"Welcome");
}

function Welcome2(){
    return React.createElement("h1",{},"Welcome2");
}

function Todo(){
    return React.createElement('div',{},
    React.createElement("p",{},"Todo tile"),
    React.createElement("p",{},"Todo description"),
    )
}


export default function Card3() {
  return (
    <div>
    <Welcome />
    <Welcome2 />
    <Todo />
    </div>
  )
}
