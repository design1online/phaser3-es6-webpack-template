/**
* @author       Jade Krafsig <jade@design1online.com>
* @copyright    Design1Online.com, LLC
* @license      {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
*/
import Phaser from 'phaser';
import customConfig from '../../config/custom';

/**
* @classdesc
* Example of tweening an animation
*
* @class AnimationTween
* @memberOf Animations
* @since 1.0.0
*/
class AnimationTween extends Phaser.Scene {

  /**
  * @desc Default constructor, sets the scene key
  */
  constructor() {
    super({
      key: 'AnimationTween',
    });

    // add in our custom config values
    Object.assign(this, customConfig);

    /**
    * A reference to the image being tweened
    * @type {Object}
    */
    this.logo = null;
  }

  /**
  * Preload the assets for this scene
  * @method Animations.AnimationTween#preload
  * @since 1.0.0
  */
  preload() {
    // load the logo image
    this.load.image('logo', '../../assets/logo.png');
  }

  /**
  * @desc Initalize the animation
  * @method Animations.AnimationTween#create
  */
  create() {
    // create an instance of the logo
    this.logo = this.add.image(400, 150, 'logo');

    if (this.debugMode) {
      console.log('logo', this.logo); // eslint-disable-line
    }

    // create the tween
    this.tweens.add({
      targets: this.logo,
      y: 430,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}

export default AnimationTween;
