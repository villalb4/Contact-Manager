import React, { useState } from "react";
import Add from "./Add"
import People from "./People"
import "./Contact.css"

function Contact(props) {

  const [contacts, setContacts] = useState([]);

  function addPerson(name) {
    setContacts([...contacts, name])
  }

  return (
    <div className="whit_react">
      <h1>Contact Manager</h1>
      <Add handleSubmit={addPerson} />
      <People data={contacts} />
    </div>
  )
}

export default Contact;