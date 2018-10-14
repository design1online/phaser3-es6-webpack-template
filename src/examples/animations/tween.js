import Phaser from 'phaser';

class TweenExample extends Phaser.Scene {
  constructor() {
    super({
      key: 'TweenExample',
    });
  }

  preload() {
    this.load.image('logo', '../../../assets/logo.png');
  }

  create() {
    const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 430,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}

export default TweenExample;
