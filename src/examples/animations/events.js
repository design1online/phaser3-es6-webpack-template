import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
  },
};

const game = new Phaser.Game(config);
let back;
let mummy;
let anim;
let loopText;

function preload() {
  this.load.image('lazur', '../../assets/spooky-bg.png');
  this.load.spritesheet('mummy', '../../assets/mummy.png', 37, 45, 18);
}

function create() {
  back = this.add.image(0, -400, 'lazur');
  back.scale.set(2);
  back.smoothed = false;

  mummy = this.add.sprite(200, 360, 'mummy', 5);
  mummy.scale.set(4);
  mummy.smoothed = false;
  anim = mummy.animations.add('walk');

  anim.onStart.add(animationStarted, this);
  anim.onLoop.add(animationLooped, this);
  anim.onComplete.add(animationStopped, this);

  anim.play(10, true);
}

function animationStarted(sprite, animation) {
  this.add.text(32, 32, 'Animation started', { fill: 'white' });
}

function animationLooped(sprite, animation) {
  if (animation.loopCount === 1) {
    loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });
  } else {
    loopText.text = 'Animation looped x2';
    animation.loop = false;
  }
}

function animationStopped(sprite, animation) {
  game.add.text(32, 64 + 32, 'Animation stopped', { fill: 'white' });
}

function update() {
  if (anim.isPlaying) {
    back.x -= 1;
  }
}
