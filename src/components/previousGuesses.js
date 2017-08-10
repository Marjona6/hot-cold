import React, { Component } from 'react';
import './previousGuesses.css';
import WrongGuess from './wrongGuess';

export default class PreviousGuesses extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="previousGuesses">
        <WrongGuess />
        <WrongGuess />
        <WrongGuess />
        <WrongGuess />
        <WrongGuess />  
      </div>    
    );
  }
}