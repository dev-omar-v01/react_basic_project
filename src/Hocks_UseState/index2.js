import React, { useState } from 'react'

export default function Hocks_UseState2() {

    const[count , setCount] = useState(0)
    const handleIncrement=()=>{
        setCount(count +1)
    }

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={handleIncrement}>increment</button>
    </div>
  )
}
