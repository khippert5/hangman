// @flow
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actons
import { resetGame, startNewGame } from '../../lib/actions';

// Styles
import { Button, ButtonContainer } from '../../styles/buttons';
import { DevTag, FooterContainer } from '../../styles';

export const Footer = () => {
  const dispatch = useDispatch();
  const { success, incorrect } = useSelector((state) => state.ui);
  const stop = incorrect > 9;

  return (<FooterContainer>
    <ButtonContainer>
      {!success && !stop && <Fragment>
        {incorrect > 4 && <Button className='reset' onClick={(e) => { e.preventDefault(); dispatch(resetGame()); }}>Start over</Button>}
        <Button className='new' onClick={(e) => { e.preventDefault(); dispatch(startNewGame()); }}>New puzzle</Button>
      </Fragment>}
    </ButtonContainer>
    <DevTag><span>Developer:</span> Kevin Hippert</DevTag>
  </FooterContainer>);
};

export default Footer;
