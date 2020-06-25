import React from "react";
import "./person.css";
function Person(props) {
  return (
    <div className="Person">
      <p onClick={props.click}>
        i am {props.name} , i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Person;
