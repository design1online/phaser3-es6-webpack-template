import Phaser from 'phaser';
import TweenExample from './examples/animations/tween';

const config = {
  // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
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
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
