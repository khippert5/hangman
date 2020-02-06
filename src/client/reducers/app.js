// @flow

// Helpers
import { registerWindowKeyPress } from '../helpers';

// Types
import type { AppState } from '../lib/types/reducer-states';
import type { Action } from '../lib/types/actions';

export const defaultState: AppState = {
  init: {
    date: null,
    time: null,
  },
};

export default function (state: AppState = defaultState, action: Action): AppState {
  switch (action.type) {
    case 'INIT_APPLICATION': {
      registerWindowKeyPress(); // Register keypress to window for keyboard input
      const newState = state;
      // Set date time started
      const date = new Date();
      const newDate = `${date.getFullYear()}/${date.getDate()}/${date.getMonth() + 1}`;
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;

      return {
        ...newState,
        init: {
          date: newDate,
          time,
        },
      };
    }
    default:
      return state;
  }
}
