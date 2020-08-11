//import react
import React, { Component } from "react";

//import components
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

//app component
export default class App extends Component {
  //constructor
  constructor() {
    super();
    this.state = {};
  }

  //render method
  render() {
    return (
      <section>
        <Header/>
        <MemeGenerator/>
      </section>
    );
  }
}
