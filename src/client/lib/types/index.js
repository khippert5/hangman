// @flow

export type AppProps = {
  correct: string | null,
  error: string | null,
  incorrect: number,
  success: boolean,
  solution: { word: string, hint: string } | null,
};

export type KeyboardKey = {
  key: string,
  which?: number,
}
