import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('bootScene');
  }

  preload() {
    // load images
    this.load.image('boot_image', './assets/anirudh-3esjG-nlgyk-unsplash.jpg');
  }

  create() {
    this.scene.start('preloadScene');
  }
}
