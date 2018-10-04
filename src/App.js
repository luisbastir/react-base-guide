import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Luis", age: 25},
      { id: "2", name: "Andrea", age: 23},
      { id: "3", name: "Sandra", age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: "asd1", name: newName, age: 22},
        { id: "dsa2", name: "Sebastian", age: 28},
        { id: "sad3", name: "Miguel", age: 27}
      ]
    })
  }

  nameChangedHander = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherint",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHander(event, person.id)} />
            );
          })}
        </div>
      );

      style.backgroundColor = "red"
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push("red")
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold")
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code className={classes.join(" ")}>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
