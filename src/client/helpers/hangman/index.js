// Helper function to prepare the canvas for drawing
export const draw = (canvasContext, drawFn) => {
  const newCanvasContext = canvasContext;
  if (newCanvasContext) {
    newCanvasContext.lineWidth = 2; // Reset line width to default
    drawFn(newCanvasContext);
  }
};

// Clears the canvas
export const clearCanvas = (canvas) => {
  const context = canvas.getContext('2d');
  if (context) context.clearRect(0, 0, canvas.width, canvas.height);
};

/**
 * Returns an array of functions that draw each part of the Hangman on the
 * canvas, scaled according to the passed size.
 *
 * @param {Number} size
 */

export default function (size) {
  const bodyHeight = size / 2;
  const appendageWidth = bodyHeight / 3;

  const platform = (canvasContext) => {
    const newCanvasContext = canvasContext;
    if (newCanvasContext) {
      newCanvasContext.lineWidth = 10;
      newCanvasContext.beginPath();
      newCanvasContext.moveTo(0, size);
      newCanvasContext.lineTo(size, size);
      newCanvasContext.stroke();
    }
  };

  const post = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.lineWidth = 10;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(0, 0);
    newCanvasContext.lineTo(0, size);
    newCanvasContext.stroke();
  };

  const pole = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.lineWidth = 10;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(0, 0);
    newCanvasContext.lineTo(size / 2, 0);
    newCanvasContext.stroke();
  };

  const rope = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(size / 2, 0);
    newCanvasContext.lineTo(size / 2, size / 10);
    newCanvasContext.stroke();
  };

  const head = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.arc(size / 2, size / 10 + size / 16, size / 16, 0, Math.PI * 2, true);
    newCanvasContext.stroke();
  };

  const body = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(size / 2, size / 10 + size / 8);
    newCanvasContext.lineTo(size / 2, size - bodyHeight);
    newCanvasContext.stroke();
  };

  const leftArm = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(size / 2, size / 3);
    newCanvasContext.lineTo(size / 2 - appendageWidth, size / 3);
    newCanvasContext.stroke();
  };

  const rightArm = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(size / 2, size / 3);
    newCanvasContext.lineTo(size / 2 + appendageWidth, size / 3);
    newCanvasContext.stroke();
  };

  const leftLeg = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(size / 2, size - bodyHeight);
    newCanvasContext.lineTo(size / 2 - appendageWidth, size - bodyHeight + appendageWidth);
    newCanvasContext.stroke();
  };

  const rightLeg = (canvasContext) => {
    const newCanvasContext = canvasContext;
    newCanvasContext.beginPath();
    newCanvasContext.moveTo(size / 2, size - bodyHeight);
    newCanvasContext.lineTo(size / 2 + appendageWidth, size - bodyHeight + appendageWidth);
    newCanvasContext.stroke();
  };

  return [platform, post, pole, rope, head, body, leftArm, rightArm, leftLeg, rightLeg];
}
