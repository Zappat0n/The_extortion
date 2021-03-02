import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('preloadScene');
  }

  preload() {
    this.load.image('platform', './assets/platform.png');

    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet('player', './assets/player.png', {
      frameWidth: 28,
      frameHeight: 51,
    });

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet('coin', './assets/coin.png', {
      frameWidth: 20,
      frameHeight: 20,
    });

    this.load.image('rock', './assets/rock.png');

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet('fire', './assets/fire.png', {
      frameWidth: 40,
      frameHeight: 70,
    });

    this.load.image('button1', './assets/button1.png');
  }

  create() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(
        'player', { start: 0, end: 6 },
      ),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 6 }],
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(
        'player', { start: 7, end: 13 },
      ),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'rotate',
      frames: this.anims.generateFrameNumbers('coin', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });
    this.anims.create({
      key: 'rotate',

      frameRate: 15,
      yoyo: true,
      repeat: -1,
    });

    this.timer = this.time.addEvent({
      delay: 3000, callback: this.scene.start('titleScene'), callbackScope: this,
    });

  }
}
