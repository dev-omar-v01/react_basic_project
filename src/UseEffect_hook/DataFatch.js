import React, { useEffect, useState } from 'react'

export default function DataFatch() {
const [todos,setTodos] = useState(null);
const [isLoading,setLoading] = useState(true);
const [error,setError] = useState(null);


    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            if(!res.ok){
                throw Error("facthing is not successfull");
            }
            return res.json();
        }).then((data)=>{
            setTodos(data);
            setLoading(false);
            setError(null);
            
        }).catch((e)=>{
            setError(e.message);
            setLoading(false);
        })
    },[]);

    const todosElement =  todos &&  todos.map((data)=>{
        return <p key={data.id}>{data.title}</p>;
     });

     const LoadingMessage = <p>Data is Loading</p>;

  return (
    <div>
      <h1>Data Fatch</h1>
      {error &&  <p>{error}</p>}
      {isLoading &&  LoadingMessage}
      {todosElement}
    </div>
  )
}
