// @flow
import type { State } from './reducer-states';

/* eslint-disable no-use-before-define */
export type InitApplication = { type: 'INIT_APPLICATION', dispatch: Dispatch };
export type LetterSelect = { type: 'SET_SELECTED_LETTER', letter: string };
export type ResetGame = { type: 'RESET_GAME' };
export type SetErrorMessage = { type: 'SET_ERROR_MESSAGE', message: string, key: string };
export type StartNewGame = { type: 'START_NEW_GAME' }
/* eslint-enable no-use-before-define */

// Registered Actions
export type Action =
| InitApplication
| LetterSelect
| ResetGame
| SetErrorMessage
| StartNewGame;

export type GetState = () => State;
// eslint-disable-next-line no-use-before-define
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => void | Promise<void>;
export type Dispatchables = Action | ThunkAction | Promise<Action> | Array<Action> | Array<Promise<Action>>;
export type Dispatch = (action: Dispatchables) => void;
