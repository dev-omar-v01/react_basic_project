import React, { useState } from 'react'

export default function From() {

    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const { name, email, password } = user;

    const handleChange =(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
      console.log(user);
      e.preventDefault();
    }
  
  return (
    <div>
     <h1>Registation</h1>
     <form action='' onClick={handleSubmit}>
     <div>
     <label htmlFor="name">Name : </label>
     <input value={name} onChange={handleChange} type='text' name="name" id="name" required></input>
     
     </div>
      <div>
      <label htmlFor="email">Email : </label>
     <input   value={email} onChange={handleChange} type='email' name="email" id="email" required></input>
      </div>
     
     <div>
     <label htmlFor="password">password : </label>
     <input value={password} onChange={handleChange}type='password' name="password" id="password" required></input>

     </div>
       <div>
        <button type='submit'>Registation</button>
       </div>
     </form>
    </div>
  )
}
