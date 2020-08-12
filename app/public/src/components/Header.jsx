//import react
import React, { Component } from "react";

//header component
export default class Header extends Component {
  //constructor
  constructor(props) {
    super();
    this.data = props;
  }
  //render method
  render() {
    return (
      <header>
        <figure>
          <img src={this.data.props.src} alt={this.data.props.alt} />
        </figure>
        <p>
            Meme Generator
        </p>
      </header>
    );
  }
}
