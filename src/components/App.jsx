// import Feedback from './feedback/Feedback';
import React, { Component } from 'react';
import { Statistics } from '../components/statistics/Statistics';
import { FeedbackOptions } from '../components/feedback-options/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onLeaveFeedback = option => {
  //   this.setState(prevState => {
  //     switch (option) {
  //       case 'good':
  //         return { good: prevState.good + 1 };
  //         break;

  //       case 'neutral':
  //         return { neutral: prevState.neutral + 1 };
  //         break;

  //       case 'bad':
  //         return { neutral: prevState.neutral + 1 };
  //         break;

  //       default:
  //         break;
  //     }
  //   });
  // };

  handleClickOnGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleClickOnNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleClickOnBad = () => {
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
    const options = ['good', 'neutral', 'bad'];
    // const onLeaveFeedback = ([
    //   this.handleClickOnGood,
    //   this.handleClickOnNeutral,
    //   this.handleClickOnBad,
    // ] = this);

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
        <FeedbackOptions
          options={options}
          // onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

// export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Feedback />
//     </div>
//   );
// };
