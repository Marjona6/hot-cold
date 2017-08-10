import React, { Component } from 'react';
import './winMessage.css';

export default class WinMessage extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 13 };
  }
  render() {
    return (
      <div className="winMessage">
        <p>You win! The number was {this.state.x}.</p>
      </div>
    );
  }
}