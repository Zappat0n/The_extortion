import LeaderboardScene from '../../scenes/leaderboard';

describe('Game Scene', () => {
  const data = { result: [{ user: 'A', score: 1 }, { user: 'B', score: 3 }, { user: 'C', score: 2 }] };
  const scene = new LeaderboardScene({
    active: true,
  });

  test('Scene is created correctly', () => {
    expect(scene.sys.config).toBe('leaderboardScene');
  });

  test('Display leaderboard', () => {
    expect(scene.displayLeaderboard(data, true)).toBe(3);
    expect(() => scene.displayLeaderboard(data, true)).not.toThrow();
  });
});
