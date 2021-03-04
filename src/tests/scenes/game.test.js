import GameScene from '../../scenes/game';

describe('Game Scene', () => {
  test('Scene is created correctly', () => {
    const scene = new GameScene({
      active: true,
    });
    expect(scene.sys.config).toBe('gameScene');
  });
});
