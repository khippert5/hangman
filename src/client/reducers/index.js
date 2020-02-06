// @flow

import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

import app, { defaultState as appState } from './app';
import ui, { defaultState as uiState } from './ui';

import type { State } from '../lib/types/reducer-states';
import type { Action } from '../lib/types/actions';

const reducer: Reducer<State, Action> = combineReducers({
  app,
  ui,
});

export default reducer;

export const defaultState: State = {
  app: appState,
  ui: uiState,
};
