// @flow

import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// Styles
import { WordBox, WordLetter, WordMap } from '../../styles/Word';

export const WordView = () => {
  const solution = useSelector((state): { hint: string, word: string } => state.ui.solution);
  const selected = useSelector((state): Array<string> => state.ui.selected);
  const success = useSelector((state): boolean => state.ui.success);

  const { hint, word } = solution;
  const words = word.split(' ');

  // Show letters
  return <Fragment>
    <p><b>Hint:</b> {hint}</p>
    <h3>Your word is:</h3>
    <WordMap>
      { words.map((wordMap, key) => <WordBox key={key} isSuccess={success}>{
          (wordMap.split('')).map((w, index) => {
            if (!selected.includes(w)) return <WordLetter key={`${key}-${index}`}>&nbsp;</WordLetter>;
            return <WordLetter key={index} className='isLetter' isSuccess={success}>{w}</WordLetter>;
          })}</WordBox>)}
    </WordMap>
  </Fragment>;
};

export default WordView;
