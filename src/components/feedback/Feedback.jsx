import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickOnGood = evt => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleClickOnNeutral = evt => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleClickOnBad = evt => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }

    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <button type="button" onClick={this.handleClickOnGood}>
            Good
          </button>
          <button type="button" onClick={this.handleClickOnNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickOnBad}>
            Bad
          </button>
        </ul>
        <div>
          <h2>
            Statistics
            <ul>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {this.countTotalFeedback()}</p>
              <p>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </p>
            </ul>
          </h2>
        </div>
      </div>
    );
  }
}

export default Feedback;
