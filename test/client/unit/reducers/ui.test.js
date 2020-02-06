import uiReducer, { defaultState } from '../../../../src/client/reducers/ui';
import MESSAGES from '../../../../src/client/constants/messages';
import WORDS from '../../../../src/client/constants/words';

describe('Test ui reducer', () => {
  // Ensuer the solution is always the same on time of start
  const solution = {
    word: 'test',
    hint: 'Test answer',
  }

  it('Match snapshot to ensure changes are verified', async (done) => {
    const newState = defaultState;
    newState.solution = solution;
    // Can't use full state because solution is dynamically loaded
    expect(newState).toMatchSnapshot()
    done();
  });
  it('RESET_GAME', async (done) => {
    const setState = defaultState;
    setState.solution = solution;
    const letter = 'e';
    let newState = uiReducer(setState, { type: 'SET_SELECTED_LETTER', letter });
    expect(newState.selected.includes(letter)).toBe(true);
    newState = uiReducer(newState, { type: 'RESET_GAME' });
    expect(newState.selected.length).toEqual(0);
    done();
  });
  it('SET_ERROR_MESSAGE', async (done) => {
    const setState = defaultState;
    setState.solution = solution;
    const message = 'duplicate';
    const key = 'e';
    expect(defaultState.error).toEqual(null);
    const newState = uiReducer(setState, { type: 'SET_ERROR_MESSAGE', message, key });
    expect(newState.error).not.toEqual(null);
    done();
  });
  it('SET_SELECTED_LETTER', async (done) => {
    const setState = defaultState;
    setState.solution = solution;
    let letter = 'e';
    let newState = uiReducer(setState, { type: 'SET_SELECTED_LETTER', letter });
    // Test success
    expect(newState.selected.includes(letter)).toBe(true);
    expect(newState.validLetters.includes(letter)).toBe(true);

    // Test miss
    letter = 'a';
    newState = uiReducer(setState, { type: 'SET_SELECTED_LETTER', letter });
    expect(newState.validLetters.includes(letter)).toBe(false);

    // Test success
    newState = uiReducer(setState, { type: 'SET_SELECTED_LETTER', letter: 't' });
    newState = uiReducer(newState, { type: 'SET_SELECTED_LETTER', letter: 's' });
    letter = 'e';
    newState = uiReducer(newState, { type: 'SET_SELECTED_LETTER', letter });
    expect(newState.correct).not.toBe(false);

    // Test error
    setState.solution = null;
    newState = uiReducer(setState, { type: 'SET_SELECTED_LETTER', letter });
    expect(newState).toEqual(setState);
    done();
  });
  it('START_NEW_GAME', async (done) => {
    const setState = defaultState;
    setState.solution = solution;
    const newState = uiReducer(setState, { type: 'START_NEW_GAME' });
    // Ensure solution change
    expect(newState.solution).not.toEqual(setState.solution);
    done();
  })
})
