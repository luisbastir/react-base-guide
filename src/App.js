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

  /*switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22},
        { name: "Sebastian", age: 28},
        { name: "Miguel", age: 27}
      ]
    })
  }

  nameChangedHander = (event) => {
    this.setState({
      persons: [
        { name: "Luis", age: 23},
        { name: event.target.value, age: 29},
        { name: "Alex", age: 25}
      ]
    })
  }*/

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
      backgroundColor: "white",
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
                key={person.id} />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style} onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
