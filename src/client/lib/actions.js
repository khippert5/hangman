// @flow
// Types
import type {
  Dispatch, InitApplication, LetterSelect, ResetGame, SetErrorMessage, StartNewGame,
} from './types/actions';

export const initApplication = (dispatch: Dispatch): InitApplication => ({
  type: 'INIT_APPLICATION', dispatch,
});
export const letterSelect = (letter: string): LetterSelect => ({ type: 'SET_SELECTED_LETTER', letter });
export const resetGame = (): ResetGame => ({ type: 'RESET_GAME' });
export const setErrorMessage = (message: string, key: string): SetErrorMessage => ({ type: 'SET_ERROR_MESSAGE', message, key });
export const startNewGame = (): StartNewGame => ({ type: 'START_NEW_GAME' });
