/**
 * @file Utilities for the Canvas
 * @author Jade Krafsig <jade@design1online.com>
 * @module Utilities.Canvas
 */

/**
 * @export
 * fullScreenCanvas
 * @desc Resizes the game canvas with respect to the current aspect ratio
 * @param game {Phaser.Game} instance of a phaser game
 * @source { "filename": "utilities/canvas.js", "lineno": 14 }
 */
export default function fullScreenCanvas(game) {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.width / game.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowWidth / gameRatio}px`;
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`;
    canvas.style.height = `${windowHeight}px`;
  }
}
