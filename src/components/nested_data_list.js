
import React from "react";
const users = [
    {
        fullName: "Md omor Faruk",
        age: 23,
        phone: [
            {home: '013485748'},
            {office: '013485748'},
        ]
    },
    {
        fullName: "Md omor",
        age: 43,
        phone: [
            {home: '013485748'},
            {office: '013485748'},
        ]
    },
]


export default function NestedList() {
    return (
        <div>
          {users.map((user,index) => {
            return (
                <article key={index}>
                    <h1>{user.fullName}</h1>
                    <p>{user.age}</p>
                    {user.phone.map((phone ,index)=> <div>
                        <p>{phone.home}</p>
                        <p> {phone.office}</p>
                    </div>)}
                </article>
            );
          })}
        </div>
    );
}