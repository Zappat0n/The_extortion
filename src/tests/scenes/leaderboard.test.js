import LeaderboardScene from '../../scenes/leaderboard';
import { mockGetScores, mockGetManyScores } from '../mocks/functionsMock';

describe('Game Scene', () => {
  const data = mockGetScores();
  const dataMany = mockGetManyScores();
  const scene = new LeaderboardScene({
    active: true,
  });

  test('Scene is created correctly', () => {
    expect(scene.sys.config).toBe('leaderboardScene');
  });

  test('Display leaderboard, display all the elements', () => {
    expect(scene.displayLeaderboard(data, true)).toBe(3);
  });

  test('Display leaderboard, does note throw an error', () => {
    expect(() => scene.displayLeaderboard(data, true)).not.toThrow();
  });

  test('Display leaderboard, display ONLY 8 the elements', () => {
    expect(scene.displayLeaderboard(dataMany, true)).toBe(8);
  });
});
