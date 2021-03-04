import Phaser from 'phaser';
import PreloadScene from '../scenes/preload';
import BootScene from '../scenes/boot';
import GameScene from '../scenes/game';
import gameOptions from './game_options';
import TitleScene from '../scenes/title';
import LeaderboardScene from '../scenes/leaderboard';

const gameConfig = {
  type: Phaser.AUTO,
  width: gameOptions.WORLD_WIDTH,
  height: gameOptions.WORLD_HEIGHT,
  scene: [BootScene, PreloadScene, TitleScene, GameScene, LeaderboardScene],
  backgroundColor: 0x000000,
  physics: {
    default: 'arcade',
  },
};

export default gameConfig;
