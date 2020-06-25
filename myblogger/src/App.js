import React, { Component } from "react";
import "./App.css";
import Persons from "./components/persons/Persons";
import Cockpit from "./components/Cockpit/Cockpit";

class App extends Component {
  state = {
    person: [
      { id: "vjhe", name: "aravind", age: 20 },
      { id: "rwfkb", name: "sai", age: 21 },
      { id: "bgeqfkj", name: "rani", age: 30 },
    ],
    other: "some other value",
    userName: "aravind",
    showperson: false,
  };

  userChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  nameChangeHndler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });
    //console.log(personIndex);
    const person = { ...this.state.person[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({
      person: persons,
    });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({
      person: persons,
    });
  };
  personToggle = () => {
    const show = this.state.showperson;
    this.setState({
      showperson: !show,
    });
  };
  render() {
    let persons = null;
    if (this.state.showperson) {
      persons = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHndler}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Cockpit person={this.state.person} clicked={this.personToggle} />
        {persons}
      </div>
    );
  }
}

export default App;
