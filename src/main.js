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
  window.game = new Phaser.Game(config);
  window.game.debugMode = config.debugMode; // toggle debug mode from the config

  // this is only for our examples, it's not required
  window.game.changeScene = (scene) => {
    // if there's no current scene defined figure out which one it is
    if (!window.game.currentScene) {
      if (window.game.debugMode) {
        console.log('no current scene, checking...'); // eslint-disable-line
      }

      window.game.scene.scenes.forEach((sceneArray) => {
        if (sceneArray.scene.isActive()) {
          window.game.currentScene = sceneArray.scene.key;

          if (window.game.debugMode) {
            console.log(`current scene: ${window.game.currentScene}`); // eslint-disable-line
          }
        }
      });
    }

    if (window.game.debugMode) {
      console.log(`changing scenes from ${window.game.currentScene} to ${scene}`); // eslint-disable-line
    }

    window.game.scene.stop(window.game.currentScene);
    window.game.scene.start(scene);
    window.game.currentScene = scene;
  };

  if (config.fullScreen) {
    fullScreenCanvas(window.game);
    window.addEventListener('resize', fullScreenCanvas, false);
  }
};
