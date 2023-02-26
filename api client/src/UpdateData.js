import React, { useEffect, useState } from "react";

export default function UpdateData() {
  
  const [id, setid] = useState(Number)
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(true);

  const [data, setdata] = useState([]);
  
  useEffect(() => {
    getlist()
  }, [data])

  function getlist() {
    fetch("http://localhost:4000/").then((result) => {
      result.json().then((resp) => {
        setdata(resp)
      })
    })
  }

  function getUsers() {
    fetch("http://localhost:4000/").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setid(resp)
        setTitle(resp[0].title)
        setCompleted(resp[0].completed)
      })
    })
  }
  
  function updateUser()
  {
    let item={id,title,completed}
    console.warn("item",item)
    fetch(`http://localhost:4000/update/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }

  return (<div>
        <h1>Update Data API</h1>
        <input type="text" value={id} onChange={(e)=>{setid(e.target.value)}} /> <br/>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br/>
        <input type="text" value={completed}  onChange={(e)=>{setCompleted(e.target.value)}} /> <br/>
        <button onClick={updateUser} >Update User</button>   
  </div>
  );
}
