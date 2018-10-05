import React from "react";

import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";
import WithClass from "../../hoc/WithClass";

const cockpit = (props) => {
  let assignedClasses = []
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button 
        className={btnClass} 
        onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </Aux>
  );
};

export default WithClass(cockpit, classes.Cockpit);