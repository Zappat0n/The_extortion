import Phaser from 'phaser';
import gameOptions from '../config/game_options';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('leaderboardScene');
  }

  gotoTitleScene() {
    this.scene.start('titleScene');
  }

  create() {
    this.add.image(gameOptions.WORLD_WIDTH / 2, 200, 'boot_image');
    this.input.on('pointerdown', this.gotoTitleScene, this);
  }
}
