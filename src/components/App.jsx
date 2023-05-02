// import Feedback from './feedback/Feedback';
import React, { Component } from 'react';
import { Statistics } from '../components/statistics/Statistics';
import { FeedbackOptions } from '../components/feedback-options/FeedbackOptions';
import { Section } from '../components/section/Section';

const options = [
  { id: 'id-1', name: 'good' },
  { id: 'id-2', name: 'neutral' },
  { id: 'id-3', name: 'bad' },
];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;

      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;

      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;

      default:
        break;
    }
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
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
