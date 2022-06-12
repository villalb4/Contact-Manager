import React from "react";

function People(props) {
  const arr = props.data
  const items = arr.map((val, i) => (
    <li key={i}>{val}</li>
  ))

  return (
    <ul>
      {items}
    </ul>
  )
}

export default People;