//import react
import React, { Component } from "react";
//header component
export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
      allMemeImg: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //fetch api
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => {
        const {memes} = json.data;
        console.log(memes)
        this.setState({
          allMemeImg: memes,
        });
      });
  }
  //handler method
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  //handle submit
  handleSubmit(event){
      event.preventDefault();
      const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
      const randMemeImg = this.state.allMemeImg[randNum].url

      this.setState({randomImg: randMemeImg})
  }
  //render method
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='topText'
            placeholder='Top Text'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='bottomText'
            placeholder='bottom Text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <figure>
          <img src={this.state.randomImg} />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </figure>
      </div>
    );
  }
}
