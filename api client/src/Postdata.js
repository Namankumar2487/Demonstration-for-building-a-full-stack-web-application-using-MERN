import { useState } from "react";
import './index.css';
// import Axios from 'axios';

export default function Postdata() {
  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [completed, setCompleted] = useState([]);
  const url="http://localhost:4000/";

  function postdata() {
    console.warn(id, title, completed);
    let data = { id, title, completed }
    // Axios.post(url,{id: id, title:title, completed:completed}).then(res=>{console.log(res.data)})
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp)
      })
    })
  }

  return (
    <div className="App">
      <h1>POST API Call </h1>
      <input className="input" type="text" value={id} onChange={(e) =>{setId(e.target.value)}} name='id' />  <br />
      <input  type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}} name='title' />  <br />
      <input  type="text" value={completed} onChange={(e) =>{setCompleted(e.target.value)}} name='completed' />  <br />
      <button type="button" onClick={postdata} >Save New User</button>
    </div>
  );
}
