import React from 'react'
import useFatch from './useFatch';

export default function DataFatch() {

    const {data,isLoading,error} = useFatch("https://jsonplaceholder.typicode.com/todos");

    const todosElement =  data &&  data.map((data)=>{
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
