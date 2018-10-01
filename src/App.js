import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    console.log("In constructor")
    super();
    this.state = { id: "1", name: "Seema" };
  }
handleClick=()=>{
  this.setState({
    name:"Bindu"
  })
}

  render() {
    console.log("Render")
    return <h1 onClick={this.handleClick}>{this.state.name}</h1>;
  }
}

export default App;
