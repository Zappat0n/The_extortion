import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('titleScene');
  }

  create() {
    this.scene.start('gameScene');
  }
}
