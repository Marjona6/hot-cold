import React, { Component } from 'react';
import './feedback.css';

export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = { temp: 'cold' };
  }
  render() {
    return (
      <div className="feedback">
        <p>{this.state.temp}</p>
      </div>
    );
  }
}