import React, { useState } from 'react'

export default function Toggle() {
    const [toggle,setToggle] = useState(true);

  return (
    <div>
      {toggle && <p>Lorem ipsum dolor sit amet </p>}
      <div>
      <button onClick={()=>{
        setToggle(!toggle);
        }}>
        {toggle ? "hide":"show"}
      </button>
     
      </div>

    </div>
  
  )
}
