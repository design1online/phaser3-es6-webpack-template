import Phaser from 'phaser';
import TweenExample from './examples/animations/tween';

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
    TweenExample,
  ],
  fullScreen: true, // toggle to turn off full screen ressizing
};
