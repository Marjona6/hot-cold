import React, { Component } from 'react';
import './wrongGuess.css';

export default class WrongGuess extends Component {
  constructor() {
    super();
    this.state = {value: 42};
  }
  render() {
    return (
     // const wrongGuessValue = 50;
      <div className="wrong-guess">
        {this.state.value}
      </div>
    );
  }
}