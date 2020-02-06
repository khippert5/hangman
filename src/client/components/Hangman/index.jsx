import React, {
  useRef, useEffect, useMemo, useState, useCallback,
} from 'react';

import { debounce } from 'lodash';

import getHangmanParts, { clearCanvas, draw } from '../../helpers/hangman';

export const HangmanCanvas = ({ incorrectGuessCount = 4 }) => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const drawnPartsRef = useRef(0);
  const previousIncorrectGuessCountRef = useRef(incorrectGuessCount);
  const [size, setSize] = useState();

  const hangmanParts = useMemo(() => getHangmanParts(size), [size]);

  // Resizes the canvas based on its parent's width
  const resizeCanvas = useCallback(() => {
    const style = getComputedStyle(containerRef.current);
    const containerSize = parseInt(style.width, 10);
    setSize(containerSize);
  }, []);

  // Debounced version to use as a resize event listener
  const resizeCanvasDebounce = useCallback(debounce(resizeCanvas, 50), []);

  // Clears and resets the canvas so parts can be redrawn
  const resetCanvas = () => {
    clearCanvas(canvasRef.current);
    drawnPartsRef.current = 0;
  };

  // Resize the canvas when the window size changes
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvasDebounce);
    return () => window.removeEventListener('resize', resizeCanvasDebounce);
  }, [resizeCanvas, resizeCanvasDebounce]);

  // Reset and redraw whenever canvas size changes
  useEffect(resetCanvas, [size]);

  // Draw the hangman parts
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // If the guess count went backward then reset the drawn state
    if (previousIncorrectGuessCountRef.current > incorrectGuessCount - 1) {
      resetCanvas();
    }
    previousIncorrectGuessCountRef.current = incorrectGuessCount;

    // Draw the relevant part for the number of incorrect guesses
    const partsToDraw = hangmanParts.slice(drawnPartsRef.current, incorrectGuessCount);
    partsToDraw.forEach((f) => draw(context, f));
    drawnPartsRef.current = incorrectGuessCount;
  }, [hangmanParts, incorrectGuessCount]);

  return (
    <div className='Hangman' ref={containerRef}>
      <canvas ref={canvasRef} height={size} width={size}></canvas>
    </div>
  );
};

export default HangmanCanvas;
