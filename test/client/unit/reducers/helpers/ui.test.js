// Helpers
import { getWord, getWordPosition } from '../../../../../src/client/reducers/helpers/ui';

// Constants
import WORDS from '../../../../../src/client/constants/words';

describe('Test ui reducer helpers', () => {
  it('Tests getWord', async (done) => {
    const solution = WORDS[0];
    expect(getWord().word).not.toBe(null);
    expect(getWord(solution, 0)).not.toEqual(solution);
    done();
  });
  it('Tests getWordPosition', async (done) => {
    const solution = WORDS[3];
    expect(getWordPosition()).toEqual(0);
    expect(getWordPosition(solution)).toEqual(3);
    done();
  });
})
