import React from 'react'

export default function Todo(props) {
 const handleDelete=(id) =>{
  console.log(id);
  }

  return (
    <div>
    
    <div>
    <p>{props.todo}</p>
    <p>{props.key}</p>

    <button onClick={()=>{
      handleDelete(props.key)
    }}>delete</button>
    </div>
      
    </div>
  )
}
