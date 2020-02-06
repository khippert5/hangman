import indexReducer, { defaultState } from '../../../../src/client/reducers';

describe('Index verify reducer unit tests', () => {
  const solution = {
    word: 'test',
    hint: 'Test answer',
  }

  it('Match snapshot. This will fail if new state default attributes change', async () => {
    const newState = defaultState;
    newState.ui.solution = solution
    expect(newState).toMatchSnapshot();
  });
});
