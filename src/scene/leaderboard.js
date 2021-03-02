import Phaser from 'phaser';
import gameOptions from '../config/game_options';
import requests from '../api/requestManager';

const sortleaderBoard = (leaderboard) => leaderboard.sort((a, b) => a.score - b.score);
const x1 = gameOptions.WORLD_WIDTH / 2 - 200;
const x2 = gameOptions.WORLD_WIDTH / 2;

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
      fontSize: '64px',
      fill: '#000000',
      color: '#ffd700',
      strokeThickness: 5,
    });
    this.add.text(x2, y, data.score, {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '64px',
      fill: '#000000',
      color: '#ffd700',
      strokeThickness: 5,
    });
  }

  displayLeaderboard(response) {
    let leaderboard = response;
    if (leaderboard && leaderboard.length > 0) {
      leaderboard = sortleaderBoard(leaderboard);
      let y = 90;
      leaderboard.slice(0, 10).forEach((data) => {
        this.addLine(data, y);
        y += 40;
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
      strokeThickness: 5,
    });

    requests.getScores().then((data) => this.displayLeaderboard(data));

    this.input.on('pointerdown', this.gotoTitleScene, this);
  }
}
