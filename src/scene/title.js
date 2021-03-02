import '../css/styles.scss';
import Phaser from 'phaser';
import gameOptions from '../config/game_options';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('titleScene');
  }

  create() {
    this.add.image(gameOptions.WORLD_WIDTH / 2, 200, 'boot_image');
    this.add.text(gameOptions.WORLD_WIDTH / 2 - 200, 50, 'The extortion', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '64px',
      fill: '#ffd700',
      strokeThickness: 1,
    });

    this.add.text(gameOptions.WORLD_WIDTH / 2 - 400, 150, "Þrymr has stolen Thor's hammer to extort the gods\ninto giving him Freyja as his wife. \n Would you help Thor recover his hammer?", {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '28px',
      color: 'black',
      fill: '#ffd700',
      align: 'center',
      fixedWidth: '800',
      wordWrap: true,
      useAdvancedWrap: true,
      strokeThickness: 1,
    });

    this.gameButton = this.add.sprite(gameOptions.WORLD_WIDTH / 2, 350, 'button1').setInteractive();
    this.gameText = this.add.text(gameOptions.WORLD_WIDTH / 2 - 24, 340, 'Play', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '24px',
      color: '#ffd700',
    });

    this.scoresButton = this.add.sprite(gameOptions.WORLD_WIDTH / 2, 430, 'button1').setInteractive();
    this.gameText = this.add.text(gameOptions.WORLD_WIDTH / 2 - 60, 420, 'Highscores', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '24px',
      color: '#ffd700',
    });

    this.gameButton.on('pointerdown', () => {
      this.scene.start('gameScene');
    });
  }
}
