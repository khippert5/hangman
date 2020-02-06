// @flow

import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { resetGame, startNewGame } from '../../lib/actions';

// Helpers
import { getMessage } from '../../helpers';

// Styles
import { Button, ButtonContainer } from '../../styles/buttons';

export const FailureView = () => {
  const dispatch = useDispatch();
  const solution = useSelector((state) => state.ui.solution);
  return (<Fragment>
    {solution !== null && <p>The word was <b>&quot;{solution.word}&quot;</b></p>}
    <h3>{getMessage('failed')}. Start over?</h3>
    <ButtonContainer>
      <Button className='reset' onClick={(e) => { e.preventDefault(); dispatch(resetGame()); }}>Try again</Button>
      <Button className='new' onClick={(e) => { e.preventDefault(); dispatch(startNewGame()); }}>New game</Button>
    </ButtonContainer>
  </Fragment>);
};

export default FailureView;
