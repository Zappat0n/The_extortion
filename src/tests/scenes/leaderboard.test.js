import LeaderboardScene from '../../scenes/leaderboard';

describe('Game Scene', () => {
  test('Scene is created correctly', () => {
    const scene = new LeaderboardScene({
      active: true,
    });
    expect(scene.sys.config).toBe('leaderboardScene');
  });
});
