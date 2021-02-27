import Phaser from 'phaser';
import preloadGame from '../scenes/preloader';
import playGame from '../scenes/play';
import { GAME_HEIGHT, GAME_WIDTH } from './constants';


const gameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: [preloadGame, playGame],
  backgroundColor: 0x0c88c7,

  // physics settings
  physics: {
    default: 'arcade',
  },
};

export default gameConfig;
