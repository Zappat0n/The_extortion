import Phaser from 'phaser';
import preloadGame from '../scenes/preloader';
import playGame from '../scenes/play_game';
import gameOptions from './game_options';


const gameConfig = {
  type: Phaser.AUTO,
  width: gameOptions.GAME_WIDTH,
  height: gameOptions.GAME_HEIGHT,
  scene: [preloadGame, playGame],
  backgroundColor: 0x0c88c7,

  // physics settings
  physics: {
    default: 'arcade',
  },
};

export default gameConfig;
