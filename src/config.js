import Phaser from 'phaser';
import { AnimationData, AnimationTween } from './examples/animations';

/**
* For more settings see:
* {@link https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js}
*/
export default {
  type: Phaser.WEBGL,
  pixelArt: true,
  roundPixels: true,
  parent: 'content',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  scene: [
    AnimationTween,
    AnimationData,
  ],
  fullScreen: true, // toggle to turn off full screen ressizing
  debugMode: true, // toggle the game's debug mode
};
