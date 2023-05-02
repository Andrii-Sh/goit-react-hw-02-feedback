import PropTypes from 'prop-types';

// export const FeedbackOptions = ({}) => (
//   <ul>
//     <button type="button" onClick={this.handleClickOnGood}>
//       Good
//     </button>
//     <button type="button" onClick={this.handleClickOnNeutral}>
//       Neutral
//     </button>
//     <button type="button" onClick={this.handleClickOnBad}>
//       Bad
//     </button>
//   </ul>
// );

export const FeedbackOptions = ({ options }) => {
  console.log(options);
  return (
    <ul>
      {options.map(option => (
        <button type="button" option={option} key={option}>
          {option}
        </button>
      ))}
    </ul>
  );
};
