/**
* @author    Jade Krafsig <jade@design1online.com>
* @copyright Design1Online.com, LLC
* @license   {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
* @module    Core
*/
import Phaser from 'phaser';
import { defaultConfig, customConfig } from './config';
import fullScreenCanvas from './utilities/canvas';

/**
* Phaser Core
* @external {Phaser} https://photonstorm.github.io/phaser3-docs/index.html
*/

/**
* Phaser Game
* @external {Phaser.Game} https://photonstorm.github.io/phaser3-docs/Phaser.Game.html
*/


/**
* Phaser Scene
* @external {Phaser.Scene} https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html
*/

/**
* @desc Initialize the phaser game object
*/
const initalizeGame = () => {
  // create the phaser instance
  window.game = new Phaser.Game(defaultConfig);

  // add in our custom global variables
  Object.assign(window.game, { ...customConfig });

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

  if (window.game.fullScreen) {
    fullScreenCanvas(window.game);
    window.addEventListener('resize', fullScreenCanvas, false);
  }
};

/**
* @function window.onload
* @desc Load the phaser game and add event listener for
* resizing the canvas if full screen is enabled
*/
window.onload = initalizeGame;
