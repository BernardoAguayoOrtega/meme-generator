//import react
import React, { Component } from "react";

//import components
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

//import css
import "../css/index.css";

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
        <Header
          props={{
            src:
              "https://images-na.ssl-images-amazon.com/images/I/51w7koDjFsL._AC_.jpg",
            alt: "troll face",
          }}
        />
        <MemeGenerator/>
      </section>
    );
  }
}
