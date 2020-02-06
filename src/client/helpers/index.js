// @flow

// Actions
import { letterSelect, setErrorMessage } from '../lib/actions';

// Constants
import MESSAGES from '../constants/messages';

// Helprs

// Helper to check of the work has all the letters in the validLetters array
// return { Boolean }
export const checkSuccess = (words: Array<string>, validLetters: Array<string>) => {
  const captureGuesses = [];
  words.map((w) => {
    const wordMap = w.split('');
    for (let i = 0; i < wordMap.length; i++) {
      if (validLetters.indexOf(wordMap[i]) !== -1) {
        captureGuesses.push(wordMap[i]);
      }
    }
    return w;
  });

  const isGuess = captureGuesses.join('');
  return Boolean(isGuess === words.join(''));
};

// Helper to get random message from message constant file
// return { string }
export const getMessage = (message: string, key?: string): string => {
  if (!message) return 'Something went wrong';

  let isError = MESSAGES[message];
  isError = isError[Math.floor(Math.random() * (isError.length - 0 + 1)) + 0] || isError[0];
  if (key) {
    return isError.replace('[letterReplace]', key.toUpperCase());
  }
  return isError;
};

// Function run when added to the window.addEventListner and window.removeEventListner
// return { void }
export const setKeyPressHandler = (e: { key: string }) => {
  const { key } = e;
  if (/[a-z]/gi.test(key)) {
    try {
      if (window.hangman.ui && window.hangman.ui.selected.includes(key)) {
        window.hangman.dispatch(setErrorMessage('duplicate', key));
        return;
      }
      window.hangman.dispatch(letterSelect(key));
    } catch (err) {
      console.log('Dispatch not found');
      console.log(err);
    }
  }
};

// Helper to allow addition of keypress listener to window
// return { void }
export const registerWindowKeyPress = (): void => {
  document.addEventListener('keypress', setKeyPressHandler);
};

// Helper to allow removal of keypress listener from window
// return { void }
export const removeWindowKeyPress = (): void => {
  document.removeEventListener('keypress', setKeyPressHandler);
};


export default registerWindowKeyPress;
