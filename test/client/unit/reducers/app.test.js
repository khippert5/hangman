import appReducer, { defaultState } from '../../../../src/client/reducers/app';

describe('Test ui reducer', () => {
  // Ensuer the solution is always the same on time of start
  const solution = {
    word: 'test',
    hint: 'Test answer',
  }

  it('Match snapshot to ensure changes are verified', async (done) => {
    expect(defaultState).toMatchSnapshot()
    done();
  });
  it('INIT_APPLICATION', async (done) => {
    const result = appReducer(defaultState, { type: 'INIT_APPLICATION'});
    expect(result.init.date).not.toBe(null);
    done();
  })
})
