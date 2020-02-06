import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import { GuessLine } from '../../styles';

export const GuessRemaining = () => {
  const incorrect = useSelector((state) => state.ui.incorrect);
  if (incorrect === 4) return <GuessLine color={'green'}>You have <span>6</span> incorrect tries to get it right.</GuessLine>;

  const remainingGuesses = (10 - incorrect);
  let color = 'green';
  if (remainingGuesses < 5) color = 'warning';
  if (remainingGuesses < 3) color = 'error';
  return <GuessLine color={color}>You have <span>{remainingGuesses}</span> out of 6 incorrect tries remaining.</GuessLine>;
};

export default GuessRemaining;
