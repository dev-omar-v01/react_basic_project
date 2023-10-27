import React, { useState } from 'react'

export default function From() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   const handlerName=(e)=>{
    setName(e.target.value)
   }
   const handlerEmail=(e)=>{
    setEmail(e.target.value)
   }
   const handlerPassword=(e)=>{
    setPassword(e.target.value)

   }
   const hanleSubmit=(e)=>{

    let userInfo ={
        name : name,
        email : email,
        password : password
     }
     
     console.log(userInfo);

     e.preventDefault();


   }


  return (
    <div>
     <h1>Registation</h1>
     <form action='' onClick={hanleSubmit}>
     <div>
     <label htmlFor="name">Name : </label>
     <input value={name} onChange={handlerName} type='text' name="name" id="name" required></input>
     
     </div>
      <div>
      <label htmlFor="email">Email : </label>
     <input   value={email} onChange={handlerEmail} type='email' name="email" id="email" required></input>
      </div>
     
     <div>
     <label htmlFor="password">password : </label>
     <input value={password} onChange={handlerPassword}type='password' name="password" id="password" required></input>

     </div>
       <div>
        <button type='submit'>Registation</button>
       </div>
     </form>
    </div>
  )
}
