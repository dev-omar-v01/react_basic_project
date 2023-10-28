import React, { useState } from 'react'
import User from './User'

export default function Users() {
    const [userName,setUserName] = useState("omor");
    const [userId,setUserId] = useState("omor12");

  return (
    <>
     <User userName={userName} userId={userId}/>
    </>
  )
}
