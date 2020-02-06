// Constants
import MESSAGES from '../../../../src/client/constants/messages';

import {
  checkSuccess,
  getMessage,
  setKeyPressHandler,
  registerWindowKeyPress,
  removeWindowKeyPress,
} from '../../../../src/client/helpers';

const map = {};
global.document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});
global.document.removeEventListener = jest.fn((event, cb) => {
  map[event] = cb;
  delete map[event];
});

global.console = {
  log: jest.fn((val) => val),
}

describe('Test helper functions', () => {
  global.window.hangman = {
    dispatch: jest.fn(),
  };

  it('Tests "checkSuccess"', async (done) => {
    expect(checkSuccess(['test'], ['t','e'])).toBe(false);
    expect(checkSuccess(['test'], ['t','e','s'])).toBe(true);
    done();
  });
  it('Tests "getMessage"', async (done) => {
    expect(getMessage()).toEqual('Something went wrong');
    let message = 'duplicate'
    let result = getMessage(message)
    expect(MESSAGES[message].includes(result)).toBe(true);

    message = 'success';
    result = getMessage(message)
    expect(MESSAGES[message].includes(result)).toBe(true);

    message = 'correct';
    result = getMessage(message)
    expect(MESSAGES[message].includes(result)).toBe(true);

    message = 'failed';
    result = getMessage(message)
    expect(MESSAGES[message].includes(result)).toBe(true);

    message = 'wrong';
    result = getMessage(message)
    expect(MESSAGES[message].includes(result)).toBe(true);

    done();
  });
  it('Tests "setKeyPressHandler"', async (done) => {
    const spy = jest.spyOn(global.console, 'log');
    setKeyPressHandler({ key: 'e' });
    expect(window.hangman.dispatch).toHaveBeenCalled();
    expect(window.hangman.dispatch).toHaveBeenCalledWith({"letter": "e", "type": "SET_SELECTED_LETTER"});

    // Test duplicate
    global.window.hangman = {
      ...global.window.hangman,
      ui: {
        selected: ['a'],
      },
    };
    setKeyPressHandler({ key: 'a' });
    expect(window.hangman.dispatch).toHaveBeenCalledWith({"letter": "e", "type": "SET_SELECTED_LETTER"});

    // Test catch
    window.hangman.dispatch = null;
    setKeyPressHandler({ key: 'a' });
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Dispatch not found');
    done();
  });
  it('Test "registerWindowKeyPress"', async (done) => {
    registerWindowKeyPress();
    const values = Object.keys(map);
    expect(values.includes('keypress')).toBe(true);
    done();
  });
  it('Test "removeWindowKeyPress"', async (done) => {
    removeWindowKeyPress();
    const values = Object.keys(map);
    expect(values.includes('keypress')).toBe(false);
    done();
  });
})
