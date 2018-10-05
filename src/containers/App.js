import React, { PureComponent } from "react";
import classes from "./App.css";

import WithClass from "../hoc/WithClass";
import Aux from "../hoc/Aux";

import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/Persons";

export const AuthContext = React.createContext(false)

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props)
    this.state = {
      persons: [
        { id: "1", name: "Luis", age: 25},
        { id: "2", name: "Andrea", age: 23},
        { id: "3", name: "Sandra", age: 26}
      ],
      showPersons: false,
      authenticated: false
    }
  }

  componentWillMount(){
    console.log("[App.js] Inside componentWillMount()")
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()")
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log("[App.js] Inside render()")
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHander}
      />
    }

    return (
      <Aux>
        <button onClick={() => this.setState({showPersons: true})}>Show persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
