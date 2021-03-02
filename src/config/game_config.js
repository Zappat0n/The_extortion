import Phaser from 'phaser';
import PreloadScene from '../scene/preload';
import BootScene from '../scene/boot';
import GameScene from '../scene/game';
import gameOptions from './game_options';
import TitleScene from '../scene/title';


const gameConfig = {
  type: Phaser.AUTO,
  width: gameOptions.WORLD_WIDTH,
  height: gameOptions.WORLD_HEIGHT,
  scene: [BootScene, PreloadScene, TitleScene, GameScene],
  backgroundColor: 0x000000,

  // physics settings
  physics: {
    default: 'arcade',
  },
};

export default gameConfig;
