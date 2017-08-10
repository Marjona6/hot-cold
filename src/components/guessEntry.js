import React, { Component } from 'react';
import './guessEntry.css';

export default class GuessEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="guess-entry">
        <p>Enter your guess: </p>
        <input type="text" placeholder="?" 
            onSubmit={e => this.props.onChange(e.target.value)} value={this.props.value} />
        <button type="submit">Guess!</button>
      </div>
    );
  }
}