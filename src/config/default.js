/**
* @author       Jade Krafsig <jade@design1online.com>
* @copyright    Design1Online.com, LLC
* @license      {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
*/
import Phaser from 'phaser';
import { AnimationData, AnimationTween, AnimationAdd } from '../examples/animations';

/**
* @desc Default Phaser configuration, for more settings see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
* @typedef {Object} defaultConfig
* @property {number} [type=Phaser.AUTO] Phaser.AUTO, Phaser.CANVAS, Phaser.HEADLESS or Phaser.WEBGL.
* AUTO picks WEBGL if available, otherwise CANVAS.
* @property {number|string} [width=1024] The width of the game, in game pixels
* @property {number|string} [height=768] The height of the game, in game pixels
* @property {number} [zoom=1] Simple scale applied to the game canvas. 2 is double size,
*  0.5 is half size, etc
* @property {number} [resolution=1] The size of each game pixel, in canvas pixels. Values
*  larger than 1 are "high"
* resolution
* @property {Object|string} [parent=null] The DOM element that will contain the game canvas,
* or its id. If null (the default) or if the named element doesn't exist, the game canvas is
* inserted directly into the document body
* @property {Object} [canvas=null] Provide your own Canvas element for Phaser to use instead of
* creating one.
* @property {string} [canvasStyle=null] CSS styles to apply to the game canvas instead of Phaser's
*  default styles.
* @property {Object} [CanvasRenderingContext2D] Provide your own Canvas Context for Phaser to use,
* instead of creating one.
* @property {Object} [scene=null] A scene or scenes to add to the game. If several are given,
* the first is started; the remainder are started only if they have { active: true }.
* @property {string[]} [seed] Seed for the random number generator
* @property {string} [title=''] The title of the game shown in the browser console
* @property {string} [url='http://phaser.io'] The URL of the game shown in the browser console
* @property {string} [version=''] The version of the game shown in the browser console
* @property {boolean} [autoFocus=true] Automatically call window.focus() when the game boots.
* Usually necessary to capture input events if the game is in a separate frame
* @property {boolean|InputConfig} [input] Input configuration, or false to disable all game input.
* See {@link https://photonstorm.github.io/phaser3-docs/global.html#InputConfig}
* @property {boolean} [disableContextMenu=false] Disable the browser's default 'contextmenu' event
* (usually triggered by a right-button mouse click)
* @property {boolean|BannerConfig} [banner=false] Configuration for the banner printed in the
* browser console when the game starts. See {@link https://photonstorm.github.io/phaser3-docs/global.html#BannerConfig}
* @property {DOMContainerConfig} [dom] The DOM Container configuration object, see {@link https://photonstorm.github.io/phaser3-docs/global.html#DOMContainerConfig}
* @property {FPSConfig} [fps] Game loop configuration, see {@link https://photonstorm.github.io/phaser3-docs/global.html#FPSConfig}
* @property {RenderConfig} [render] Game render configuration, see {@link https://photonstorm.github.io/phaser3-docs/global.html#RenderConfig}
* @property {string|number} [backgroundColor=0x000000] The background color of the game canvas
* @property {CallbacksConfig} [callbacks] Optional callbacks to run before or after game boot see {@link https://photonstorm.github.io/phaser3-docs/global.html#CallbacksConfig}
* @property {LoaderConfig} [loader] Loader configuration see {@link https://photonstorm.github.io/phaser3-docs/global.html#LoaderConfig}
* @property {ImagesConfig} [images] Images configuration see {@link https://photonstorm.github.io/phaser3-docs/global.html#ImagesConfig}
* @property {Object} [physics] Physics configuration see {@link https://photonstorm.github.io/phaser3-docs/Phaser.Physics.html}
* @property {PluginObject|PluginObjectItem[]} Plugins to install see {@link https://photonstorm.github.io/phaser3-docs/global.html#PluginObject} and {@link https://photonstorm.github.io/phaser3-docs/global.html#PluginObjectItem}
* @see https://photonstorm.github.io/phaser3-docs/global.html#GameConfig
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
