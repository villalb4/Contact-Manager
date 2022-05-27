import React, { useState } from "react";
import Add from "./Add"
import People from "./People"

function Contact(props) {

  const [contacts, setContacts] = useState([]);

  function addPerson(name) {
    setContacts([...contacts, name])
  }

  return (
    <>
      <h1>Contact Manager</h1>
      <Add handleSubmit={addPerson} />
      <People data={contacts} />
    </>
  )
}

export default Contact;