/**
* @author    Jade Krafsig <jade@design1online.com>
* @copyright Design1Online.com, LLC
* @license   {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
*/

/**
 * Full Screen Canvas
 * @desc Resizes the game canvas with respect to the current aspect ratio
 */
export default function fullScreenCanvas() {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = window.game.width / window.game.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowWidth / gameRatio}px`;
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`;
    canvas.style.height = `${windowHeight}px`;
  }
}
