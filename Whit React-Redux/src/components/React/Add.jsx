import React, { useState } from "react";

function Add(props) {
  const [person , setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new contact" onChange={handleChange} value={person}/>
      <input type="submit" value="Add"/>
    </form>
  )
}

export default Add;