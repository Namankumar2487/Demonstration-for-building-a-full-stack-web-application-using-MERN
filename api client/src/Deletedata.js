import React, { Fragment, useEffect, useState } from "react";


export default function Deletedata(item) {
  console.log("value of props ", item._id);
  const [data, setdata] = useState([]);

  useEffect(() => {
    getlist()
  }, [])
  console.warn(data);

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
        console.warn(resp);
        getlist();
      })
    })
  }

  return (<Fragment>
    <button onClick={() => DeleteUser(item._id)}>Delete Element</button>
  </Fragment>
  );
}
