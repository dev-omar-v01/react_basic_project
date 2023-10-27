import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ['todo1','todo2'];

export default function Home() {

    const [todos,setTodos] = useState(dummyTodos);

    const handeNewTodos =(newTodo)=>{
        setTodos([...todos,newTodo]);
    }

  return (
    <div>
    
    <NewTodo  onTodo={handeNewTodos}/>
      <Todos todos={todos}/>
    </div>
  )
}
