// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { HangmanCanvas } from '.';
import HangmanCycle from './Cycle';

storiesOf('Hangman', module)
  .add('Default State', () => <div>
        <HangmanCanvas incorrectGuessCount={4} />
      </div>)
  .add('Parts Drawn', () => <div>
        <HangmanCanvas incorrectGuessCount={7} />
      </div>)
  .add('Cycle', () => <HangmanCycle incorrectGuessCount={4} ></HangmanCycle>);
