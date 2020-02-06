import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

// Components
import MessageContainer from './Message';

// Actions
import { startNewGame } from '../../lib/actions';

// Styles
import { Button } from '../../styles/buttons';

export const Success = () => {
  const dispatch = useDispatch();
  return (<Fragment>
    <MessageContainer />
    <Button className='new' onClick={(e) => { e.preventDefault(); dispatch(startNewGame()); }}>New game</Button>
  </Fragment>);
};

export default Success;
