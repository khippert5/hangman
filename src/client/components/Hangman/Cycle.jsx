import React, { useState, useEffect, useRef } from 'react';
import { range } from 'lodash';

// Component
import { HangmanCanvas } from '.';

const HangmanCycle = () => {
  const guessCounts = range(0, 11);
  const timeoutRef = useRef();
  const [currentGuessCountIndex, setCurrentGuessCountIndex] = useState(0);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      const nextIndex = currentGuessCountIndex + 1;
      setCurrentGuessCountIndex(nextIndex > guessCounts.length - 1 ? 0 : nextIndex);
    }, 500);

    return () => clearInterval(timeoutRef.current);
  }, [currentGuessCountIndex, guessCounts.length]);

  const incorrectGuessCount = guessCounts[currentGuessCountIndex];
  return (
    <div>
      <p>Incorrect Guesses: {incorrectGuessCount}</p>
      <HangmanCanvas incorrectGuessCount={incorrectGuessCount} />
    </div>
  );
};

export default HangmanCycle;
