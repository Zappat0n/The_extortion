import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('bootScene');
  }

  create() {
    this.scene.start('preloadScene');
  }
}
