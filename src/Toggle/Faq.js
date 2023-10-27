import React, { useState } from 'react';
import style from './fag.module.css'
export default function Faq({id,title,desc}) {
    const [toggle,setToggle] = useState(false);

  return (
    <article className={style.faq}>
        <div  >
            <h1>{title}</h1>
            <button onClick={()=>{
        setToggle(!toggle);
        }}>{toggle ? "hide":"show"}</button>
        </div>
        {toggle && <p>{desc}</p>}
    </article>
  )
}
