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

  // this is only for our examples, it's not required
  window.game.changeScene = (scene) => {
    if (!window.game.currentScene) {
      window.game.scene.scenes.forEach((sceneArray) => {
        if (sceneArray.scene.isActive()) {
          window.game.currentScene = sceneArray.scene.key;
        }
      });
    }

    console.log(`changing scenes from ${window.game.currentScene} to ${scene}`);

    window.game.scene.stop(window.game.currentScene);
    window.game.scene.start(scene);
    window.game.currentScene = scene;
  };

  if (config.fullScreen) {
    fullScreenCanvas(window.game);
    window.addEventListener('resize', fullScreenCanvas, false);
  }
};
