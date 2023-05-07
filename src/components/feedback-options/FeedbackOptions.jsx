import PropTypes from 'prop-types';
import { OptionsList, OptionsBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsBtn
          type="button"
          option={option.name}
          key={option.id}
          onClick={() => onLeaveFeedback(option.name)}
        >
          {option.name}
        </OptionsBtn>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
