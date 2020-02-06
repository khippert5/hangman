// @flow strict-local

export type AppState = {
  init: {
    date: string | null,
    time: string | null,
  },
};

export type UiState = {
  correct: string | null,
  error: string | null,
  values: Array<string>,
  selected: Array<string>,
  solution: { word: string, hint: string } | null,
  incorrect: number,
  success: boolean,
  validLetters: Array<string>,
};

export type State = {
  app: AppState,
  ui: UiState,
};
