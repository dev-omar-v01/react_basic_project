import React from 'react'

export default function Child(props) {
    const data = " i am from Child componet";
    props.onChildData(data);
  return (
    <div>
      <h1>i am child </h1>
      <p>{props.data}</p>
    </div>
  )
}
