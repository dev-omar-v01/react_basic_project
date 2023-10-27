import React, { useState } from 'react'

export default function NewTodo(props) {
    const [todo,setTodo] = useState("");
    const haldeChange=(event)=>{
        setTodo(event.target.value);
    }
    const haldeSubmit=(event)=>{
        event.preventDefault();
        props.onTodo(todo);

    }

  return (
   <form onSubmit={haldeSubmit}>
    <label htmlFor='todo'>New Todo Added :</label>
    <input onChange={haldeChange} value={todo} type='text' id="todo" name="todo"></input>
    <button>Add Todo</button>
   </form>
  )
}
