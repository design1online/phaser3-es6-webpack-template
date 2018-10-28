/**
* @author       Jade Krafsig <jade@design1online.com>
* @copyright    Design1Online.com, LLC
* @license      {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
* @module       Config.default
*/
import Phaser from 'phaser';
import { AnimationData, AnimationTween, AnimationAdd } from '../examples/animations';

/**
* @export
* The Phaser game configuration settings
* For more settings see:
* {@link https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js}
*/
export default {
  type: Phaser.WEBGL,
  parent: 'content',
  width: 800,
  height: 600,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  /* list of all the game scenes */
  scene: [
    AnimationTween,
    AnimationData,
    AnimationAdd,
  ],
};
