import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    const [count,setCount] = useState(0);
    const [isLoading,setLoading] = useState(false);

useEffect(()=>{
    console.log("useEffect");
},[count]);

    const handleOnClick=()=>{
        setCount(()=>count +1)
    }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleOnClick}>increment</button>
      <button onClick={()=>{
        setLoading((!isLoading))
      }}>increment</button>
    </div>
  )
}
