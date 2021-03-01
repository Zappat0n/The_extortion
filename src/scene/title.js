import Phaser from 'phaser';
import gameOptions from '../config/game_options';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('titleScene');
  }

  create() {
    this.add.image(gameOptions.WORLD_WIDTH / 2, 200, 'boot_image');

    this.gameButton = this.add.sprite(gameOptions.WORLD_WIDTH / 2, 200, 'button1').setInteractive();
    this.gameText = this.add.text(gameOptions.WORLD_WIDTH / 2 - 32, 190, 'Play', { fontSize: '24px', fill: '#fff' });

    this.gameButton.on('pointerdown', () => {
      this.scene.start('gameScene');
    });
  }
}
