// @flow

import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import HangmanComponent from '../components/Hangman';
import LetterSelect from '../components/fragments/Select-letters';
import WordPreview from '../components/fragments/Word';
import MessageContainer from '../components/fragments/Message';
import GuessContainer from '../components/fragments/Guesses';
import ErrorBoundary from './Error-boundary';
import Failure from '../components/fragments/Failure';
import FooterWrapper from '../components/fragments/Footer';
import SuccessWrapper from '../components/fragments/Success';

// Styles
import '../css/App.css';
import { WordContainer } from '../styles/Word';

// Actions
import { initApplication } from '../lib/actions';

// Styles
import {
  AppWrapper, AppContainer, Title,
} from '../styles';

// Types
import type { UiState } from '../lib/types/reducer-states';
import type { AppProps } from '../lib/types';

export const App = () => {
  // const [state] = useReducer(Reducer);
  const dispatch = useDispatch();

  // Set to window for use later
  window.hangman = window.hangman || {};
  window.hangman.dispatch = dispatch;

  const init = useSelector((state) => state.app.init);
  const {
    incorrect, success,
  }: AppProps = useSelector((state): UiState => state.ui);
  const stop = incorrect > 9;

  // Init app is not set
  if (!init || (init && init.time === null)) {
    dispatch(initApplication(dispatch));
  }

  // Error boundary used to catch thrown messages to ensure no blank screen and some user interaction.
  // Further functions would be used to correct the application depending on the error. Great feature for local dev to catch things before production
  return (<ErrorBoundary>
    <AppWrapper>
      <AppContainer>
        <Title>React Hangman</Title>
          <HangmanComponent incorrectGuessCount={incorrect}></HangmanComponent>
          <WordContainer>
            {success && !stop && <SuccessWrapper />}
            <WordPreview isSuccess={success} />
          </WordContainer>
          {!success && <Fragment>
            <GuessContainer />
            {!stop && <MessageContainer />}
          </Fragment>}
          {!success && stop && <Failure />}
          {!success && !stop && <LetterSelect /> }
        <FooterWrapper />
      </AppContainer>
    </AppWrapper>
  </ErrorBoundary>);
};

export default App;
