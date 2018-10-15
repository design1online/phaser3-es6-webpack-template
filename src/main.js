/**
 * @file Creates a Phaser game
 * @author Jade Krafsig <jade@design1online.com>
 * @extends {Phaser.Game}
 */
import Phaser from 'phaser';
import config from './config';
import fullScreenCanvas from './utilities/canvas';

/**
 * Load the phaser game and add event listener for
 * resizing the canvas if full screen is enabled
 */
window.onload = () => {
  const game = new Phaser.Game(config);

  if (config.fullScreen) {
    fullScreenCanvas(game);
    window.addEventListener('resize', fullScreenCanvas, false);
  }
};
