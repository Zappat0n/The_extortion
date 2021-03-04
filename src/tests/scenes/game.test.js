import GameScene from '../../scenes/game';

jest.mock('Phaser');

describe('Game Scene', () => {
  test('Scene is created correctly', () => {
    const scene = new GameScene({
      active: true,
    });
    expect(scene.sys.config).toBe('gameScene');
  });
});
