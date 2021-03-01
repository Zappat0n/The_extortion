import Phaser from 'phaser';
// preloadGame scene
class preloadGame extends Phaser.Scene {
  constructor() {
    super('PreloadGame');
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

    // the firecamp is a sprite sheet made by 32x58 pixels
    this.load.spritesheet('fire', './assets/fire.png', {
      frameWidth: 40,
      frameHeight: 70,
    });

    // mountains are a sprite sheet made by 512x512 pixels
    this.load.spritesheet('mountain', './assets/mountain.png', {
      frameWidth: 512,
      frameHeight: 512,
    });
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

    this.scene.start('PlayGame');
  }
}

export default preloadGame;
