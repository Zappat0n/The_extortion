import Phaser from 'phaser';
import gameOptions from '../config/game_options';
import requests from '../api/requestManager';
import { sortScores } from './helpers';

const x1 = gameOptions.WORLD_WIDTH / 2 - 180;
const x2 = gameOptions.WORLD_WIDTH / 2 + 120;

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('leaderboardScene');
  }

  gotoTitleScene() {
    this.scene.start('titleScene');
  }

  addLine(data, y) {
    this.add.text(x1, y, data.user, {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '24px',
      fill: '#000000',
      color: '#ffd700',
      strokeThickness: 3,
    });
    this.add.text(x2, y, data.score, {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '24px',
      fill: '#000000',
      color: '#ffd700',
      strokeThickness: 3,
    });
  }

  displayLeaderboard(result) {
    let leaderboard = result.result;
    console.log(leaderboard.length);
    if (leaderboard && leaderboard.length > 0) {
      leaderboard = sortScores(leaderboard);
      let y = 140;
      leaderboard.slice(0, 10).forEach((data) => {
        this.addLine(data, y);
        y += 60;
      });
    }
  }

  create() {
    this.add.image(gameOptions.WORLD_WIDTH / 2, 200, 'boot_image');
    this.add.text(gameOptions.WORLD_WIDTH / 2 - 200, 50, 'Leaderboard', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '64px',
      fill: '#000000',
      color: '#ffd700',
      strokeThickness: 3,
    });

    requests.getScores().then((data) => this.displayLeaderboard(data));

    this.input.on('pointerdown', this.gotoTitleScene, this);
  }
}
