import React from "react";
import styles from "./Cockpit.module.css";
function Cockpit(props) {
  const assignedStyles = [];
  if (props.person.length <= 2) {
    assignedStyles.push(styles.red);
  }
  if (props.person.length <= 1) {
    assignedStyles.push(styles.bold);
  }

  return (
    <div>
      <h1>Hello i am react app </h1>
      <p className={assignedStyles.join(" ")}>this is working</p>
      <button className={styles.btn} onClick={props.clicked}>
        clicl me!
      </button>
    </div>
  );
}

export default Cockpit;
