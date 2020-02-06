// @flow

// Helpers
import {
  checkSuccess, getMessage, removeWindowKeyPress, registerWindowKeyPress,
} from '../helpers';
import { getWord, getWordPosition } from './helpers/ui';

// Types
import type { UiState } from '../lib/types/reducer-states';
import type { Action } from '../lib/types/actions';

export const defaultState: UiState = {
  correct: null,
  error: null,
  incorrect: 4,
  selected: [],
  // eslint-disable-next-line no-use-before-define
  solution: getWord(),
  success: false,
  validLetters: [],
  values: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
};

export default function (state: UiState = defaultState, action: Action): UiState {
  switch (action.type) {
    case 'RESET_GAME': {
      let newState = state;
      // Clean keypress from window so it does not duplicate
      removeWindowKeyPress();
      // Re-register keypress to window
      registerWindowKeyPress();

      newState = {
        ...newState,
        correct: null,
        error: null,
        incorrect: 4,
        selected: [],
        success: false,
        validLetters: [],
      };

      // Register to window for keypress
      // Needed to pull from on the keypress register event
      window.hangman = {
        ...window.hangman,
        ui: {
          ...newState,
        },
      };

      return newState;
    }
    case 'SET_ERROR_MESSAGE': {
      const { message, key } = action;
      let newState = state;
      newState = {
        ...newState,
        error: getMessage(message, key),
      };

      // Register to window for keypress
      window.hangman = {
        ...window.hangman,
        ui: {
          ...newState,
        },
      };

      return newState;
    }
    case 'SET_SELECTED_LETTER': {
      let newState = state;
      const { letter } = action;
      const {
        incorrect, selected, validLetters, solution,
      } = newState;
      let success = false;
      const newSelected = selected;
      if (!solution) return newState;
      const { word } = solution;

      // Failout for keypress
      if (selected.includes(letter)) return state;

      // Remove keypress listener from winow to ensure it doesn't continue to trigger if failed
      removeWindowKeyPress();

      let newIncorrect = incorrect;
      let error = null;
      let correct = getMessage('correct', letter);
      if (word.indexOf(letter) === -1) {
        newIncorrect++;
        error = getMessage('wrong', letter);
        correct = null;
      }
      if (word.indexOf(letter) !== -1) {
        validLetters.push(letter);
      }

      newSelected.push(letter);

      if (word !== null) {
        success = checkSuccess(word.split(' '), validLetters);
        if (success) correct = getMessage('success', letter);
      }

      // If not met limit or not successful, re-register keypress to allow futher input
      if (!success && newIncorrect < 10) registerWindowKeyPress();

      newState = {
        ...newState,
        correct,
        error,
        incorrect: newIncorrect,
        selected: newSelected,
        success,
        validLetters,
      };

      // Register to window for keypress
      window.hangman = {
        ...window.hangman,
        ui: {
          ...newState,
        },
      };

      // Return computed state
      return newState;
    }
    case 'START_NEW_GAME': {
      let newState = state;
      const { solution } = newState;
      const newSolution = getWord(solution, getWordPosition(solution));
      // Clean keypress
      removeWindowKeyPress();
      // Re-register keypress
      registerWindowKeyPress();

      newState = {
        ...newState,
        correct: null,
        error: null,
        incorrect: 4,
        selected: [],
        solution: newSolution,
        success: false,
        validLetters: [],
      };

      // Register to window for keypress
      window.hangman = {
        ...window.hangman,
        ui: {
          ...newState,
        },
      };

      return newState;
    }
    default:
      return state;
  }
}
