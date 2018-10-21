/**
* @author       Jade Krafsig <jade@design1online.com>
* @copyright    Design1Online.com, LLC
* @license      {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
*/
import Phaser from 'phaser';

/**
* @classdesc
* Example of animation events
*
* @class AnimationData
* @memberOf Animations
* @constructor
* @since 1.0.0
*/
class AnimationData extends Phaser.Scene {
  constructor() {
    super({
      key: 'AnimationData',
    });

    this.frameView = null; // highlights the active animation frame
    this.curtain = null; // hides the sprites to create a "clear screen" effect
    this.progress = null; // shows information about the animation progress
    this.sprite = null; // keeps an instance of the loaded sprite

    this.spriteSheet = { // the spritesheet to animate
      name: 'mummy', // name of the sprite
      image: '../../assets/mummy.png', // location of the sprite sheet
      width: 37, // width of a single sprite
      height: 45, // height of a single sprite
      start: 0, // frame to start the animation on
      end: 17, // frame to end the animation on
      margin: 0, // margins around the animations
      spacing: 0, // spacing between the animations
      frameRate: 6, // speed that the animation plays
      yoyo: false, // play this animation forwards and backwards
    };
  }

  /**
  * Preload the assets for this scene
  * @method Animations.AnimationData#preload
  * @since 1.0.0
  */
  preload() {
    // load the sprite sheet animation
    this.load.spritesheet(this.spriteSheet.name, this.spriteSheet.image,
      {
        frameWidth: this.spriteSheet.width,
        frameHeight: this.spriteSheet.height,
        startFrame: this.spriteSheet.start || 0,
        endFrame: this.spriteSheet.end || null,
        margin: this.spriteSheet.margin || 0,
        spacing: this.spriteSheet.spacing || 0,
      });
  }

  /**
  * @desc Initalize the animation
  * @method Animations.AnimationData#create
  */
  create() {
    // Frame debug view
    this.frameView = this.add.graphics({ fillStyle: { color: 0xff00ff }, x: 32, y: 32 });

    // Show the whole animation sheet
    this.add.image(32, 32, this.spriteSheet.name, '__BASE').setOrigin(0);

    // Create the animation
    const anim = this.anims.create(
      {
        key: 'playAll',
        frames: this.anims.generateFrameNumbers(this.spriteSheet.name),
        frameRate: this.spriteSheet.frameRate,
        yoyo: this.spriteSheet.yoyo,
        repeat: -1,
      },
    );

    // show this only if we're in debug mode
    if (this.debugMode) {
      console.log(anim); // eslint-disable-line
    }

    // scale up the image so it's not so small
    this.sprite = this.add.sprite(400, 300, this.spriteSheet.name).setScale(4);

    if (this.debugMode) {
      console.log(this.sprite); // eslint-disable-line
    }

    this.sprite.anims.load('playAll');

    // Debug text
    this.progress = this.add.text(100, 500, 'Progress: 0%', { color: '#00ff00' });

    // play the walk animation
    this.input.keyboard.on('keydown_SPACE', () => {
      this.sprite.anims.play('playAll');
    });

    // Toggle play/pause of walk animation
    this.input.keyboard.on('keydown_P', () => {
      if (this.sprite.anims.isPaused) {
        this.sprite.anims.resume();
      } else {
        this.sprite.anims.pause();
      }
    });

    // Restart if they press R button
    this.input.keyboard.on('keydown_R', (event) => {
      if (this.debugMode) {
        console.log(event); // eslint-disable-line
      }
      this.sprite.anims.restart();
    });
  }

  /**
  * @desc Updates the pink frame around the current animation that's displayed
  * @method Animations.AnimationData#updateFrameView
  */
  updateFrameView() {
    this.frameView.clear();
    this.frameView.fillRect(
      this.sprite.frame.cutX,
      this.sprite.frame.cutY,
      this.spriteSheet.width,
      this.spriteSheet.height,
    );
  }

  /**
  * @desc The render callback loop
  * @method Animations.AnimationData#update
  */
  update() {
    this.updateFrameView();

    const debug = [
      'SPACE to start animation, P to pause/resume',
      `Progress: ${this.sprite.anims.getProgress()}%`,
      `Accumulator: ${this.sprite.anims.accumulator}`,
      `NextTick: ${this.sprite.anims.nextTick}`,
    ];

    this.progress.setText(debug);
  }
}

export default AnimationData;
