import React, { Component } from 'react';
import './App.css';
import WrongGuess from './components/wrongGuess';
import PreviousGuesses from './components/previousGuesses';
import GuessEntry from './components/guessEntry';
import Feedback from './components/feedback';
import WinMessage from './components/winMessage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { guess: 75 };
  }

  setGuess(guess) {
    this.setState({guess});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Guess a Number!</h1>
          <h2>Hot or cold?</h2>
        </div>
        <p className="App-intro">
          To get started, guess a number.
        </p>
        <GuessEntry defaultValue={this.state.guess} onSubmit={value => this.setGuess(value)} />
        <Feedback />
        <PreviousGuesses />
        <WinMessage />
      </div>
    );
  }
}