// @flow

// Constants
import WORDS from '../../constants/words';

// Set empty pass for function use
const emptySolution = {
  word: '',
  hint: '',
};

// Helper to get random word from words constant file
// return { string }
// getByCount is not necessary for UI but needed for tests
export const getWord = (
  used: { word: string, hint: string } | null = emptySolution,
  getByCount?: number = (Math.floor(Math.random() * (WORDS.length - 0 + 1)) + 0),
): { word: string, hint: string } => {
  let newSolution = WORDS[getByCount];
  if (!newSolution || (newSolution && newSolution === used)) {
    newSolution = getWord(used, Math.floor(Math.random() * (WORDS.length - 0 + 1)) + 0);
  }
  return newSolution;
};

// Helper to get word position
// return { number }
// Needed for reducer pass of getByCount in getWord function
export const getWordPosition = (solution: { word: string, hint: string } | null = emptySolution): number => {
  const position = WORDS.indexOf(solution);
  return position === -1 ? 0 : position;
};
