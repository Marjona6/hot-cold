import React, { Component } from 'react';
import './guessCounter.css';

export default class GuessCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 }
  }
  render() {
    return (
      <div className="guessCounter">
        <p>Guess #{this.state.count}</p>
      </div>
    );
  }
}