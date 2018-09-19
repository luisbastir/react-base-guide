import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Luis", age: 25},
      { name: "Andrea", age: 23},
      { name: "Sandra", age: 26}
    ]
  }

  switchNameHandler = (newName) => {
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
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherint",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
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
        <button style={style} onClick={() => this.switchNameHandler("Adrian") }>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Bastidas")}
          changed={this.nameChangedHander} >
          My hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
