import Phaser from 'phaser';

/**
 * An example of how animation events work
 * @class
 * @constructor
 */
class AnimationEventsExample extends Phaser.Scene {
  constructor() {
    super({
      key: 'TweenExample',
    });

    this.back = null;
    this.mummy = null;
    this.anim = null;
    this.loopText = null;
  }

  /**
   * @desc Preload the images to use in this example
   */
  preload() {
    this.load.image('lazur', '../../assets/spooky-bg.png');
    this.load.spritesheet('mummy', '../../assets/mummy.png', 37, 45, 18);
  }

  /**
   * @desc Initalize the animation
   */
  create() {
    this.back = this.add.image(0, -400, 'lazur');
    this.back.scale.set(2);
    this.back.smoothed = false;

    this.mummy = this.add.sprite(200, 360, 'mummy', 5);
    this.mummy.scale.set(4);
    this.mummy.smoothed = false;
    this.anim = this.mummy.animations.add('walk');

    this.anim.onStart.add(this.animationStarted);
    this.anim.onLoop.add(this.animationLooped);
    this.anim.onComplete.add(this.animationStopped);

    this.anim.play(10, true);
  }

  /**
   * @desc Fire an event when the animation starts
   * @param {object} sprite the animation sprite
   * @param {object} reference to the animation
   */
  animationStarted(sprite, animation) {
    console.log(sprite, animation); // eslint-disable-line
    this.add.text(32, 32, 'Animation started', { fill: 'white' });
  }

  animationLooped(sprite, animation) {
    console.log(sprite, animation); // eslint-disable-line
    if (animation.loopCount === 1) {
      this.loopText = this.add.text(32, 64, 'Animation looped', { fill: 'white' });
    } else {
      this.loopText.text = 'Animation looped x2';
      animation.loop = false; // eslint-disable-line
    }
  }

  animationStopped(sprite, animation) {
    console.log(sprite, animation); // eslint-disable-line
    this.add.text(32, 64 + 32, 'Animation stopped', { fill: 'white' });
  }

  update() {
    if (this.anim.isPlaying) {
      this.back.x -= 1;
    }
  }
}

export default AnimationEventsExample;
