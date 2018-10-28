/**
* @author       Jade Krafsig <jade@design1online.com>
* @copyright    Design1Online.com, LLC
* @license      {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
* @module       Animations.add
*/
import Phaser from 'phaser';
import customConfig from '../../config/custom';

/**
* @classdesc
* Example of adding animations on click
*
* @class AnimationAdd
* @memberOf Animations
* @constructor
* @since 1.0.0
*/
class AnimationAdd extends Phaser.Scene {
  constructor() {
    super({
      key: 'AnimationAdd',
    });

    // add in our custom config values
    Object.assign(this, customConfig);

    this.i = 0;
    this.y = null;
    this.loaded = false;
    this.information = null;
    this.animations = null;

    this.addAnimation = this.addAnimation.bind(this);
    this.createGemAnimation = this.createGemAnimation.bind(this);
  }

  /**
  * Preload the assets for this scene
  * @method Animations.AnimationAdd#preload
  * @since 1.0.0
  */
  preload() {
    this.load.atlas('gems', `${this.assetPath}gems.png`, `${this.assetPath}gems.json`);
  }

  /**
  * @desc Initalize the animation
  * @method Animations.AnimationAdd#create
  */
  create() {
    // reset the gem index and y position
    this.i = 0;
    this.y = 100;

    // Each time a new animation is added to the Animation Manager we'll call this function
    this.animations = this.anims.on('add', this.addAnimation);

    // Click to add an animation
    this.input.on('pointerup', () => {
      switch (this.i) {
        case 0: this.createGemAnimation('diamond', 15); break;
        case 1: this.createGemAnimation('prism', 6); break;
        case 2: this.createGemAnimation('ruby', 6); break;
        case 3: this.createGemAnimation('square', 14); break;
        default: break;
      }

      this.i += 1;
    });

    const infoText = 'Click up to 4 times to add an animation to the canvas';
    this.information = this.add.text(100, 500, infoText, { color: this.textColor });
  }

  /**
  * Creates an animation for the gem
  *
  * @param {String} key the name of the animation
  * @param {Number} end the number of frames in the animation
  */
  createGemAnimation(key, end) {
    // only create if it doesn't exist yet this this is called on the add event listener
    if (!this.anims.get(key)) {
      // as soon as this is created the add event will fire this.addAnimation
      this.animations.create({
        key,
        frames: this.animations.generateFrameNames('gems', { prefix: `${key}_`, end, zeroPad: 4 }),
        repeat: -1,
      });
    } else {
      this.addAnimation(key);
    }
  }

  /**
  * @desc Add the animation sprite to the screen
  * @method Animations.AnimationAdd#addAnimation
  *
  * @param {String} key the animation key to play
  */
  addAnimation(key) {
    if (this.debugMode) {
      console.log('adding animation', key); // eslint-disable-line
    }

    this.add.sprite(400, this.y, 'gems').play(key);
    this.y += 100;
  }
}

export default AnimationAdd;
