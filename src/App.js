import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    name: "Shailaja"
  };
  nameChangeHandler = event => {
    this.setState({ name: event.target.value });
  };
  deleteHandler = index => {
    const name = this.state.name.split("");
    name.splice(index, 1);
    const newName = name.join("");
    this.setState({ name: newName });
  };
  render() {
    const string = this.state.name.split("").map((s, index) => {
      return (
        <CharComponent
          key={index}
          letter={s}
          click={() => this.deleteHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Assignment 2 : Lists & Conditionals</h1>
        </header>
        <input
          style={{ margin: "15px" }}
          type="text"
          onChange={this.nameChangeHandler}
          value={this.state.name}
        />
        <p style={{ color: "#ff0000" }}>
          There are total <b>{this.state.name.length}</b> characters!
        </p>
        <ValidationComponent length={this.state.name.length} />
        {string}
      </div>
    );
  }
}

export default App;
