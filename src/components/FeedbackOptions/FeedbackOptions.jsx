import { Button } from '../App.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          onClick={event => onLeaveFeedback(event.target.name)}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};
