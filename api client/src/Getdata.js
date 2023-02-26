import React, { useEffect, useState } from "react";
// import Deletedata from "./Deletedata";

export default function Getdata() {
  
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
  function DeleteUser(_id) {
    fetch(`http://localhost:4000/delete/${_id}`, { method: "DELETE" }).then((result) => {
      result.json().then((resp) => {
        getlist();
      })
    })
  }

  return (<div>
    <h1>Get API Call </h1>
    <table border="1" align='center'>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Title</td>
          <td>Completed</td>
          <td>Delete?</td>
        </tr>
        {
          data.map((item, i) =>
            <tr key={i}>
            {/* <td>{item._id}</td> */}
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "True" : "False"}</td>
              <td><button onClick={() => DeleteUser(item._id)}>Delete Element</button></td>
              {/* <td><Deletedata props={item}/></td> */}
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
  );
}
