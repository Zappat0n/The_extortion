import TitleScene from '../../scenes/title';

describe('Title Scene', () => {
  test('Scene is created correctly', () => {
    const scene = new TitleScene({
      active: true,
    });
    expect(scene.sys.config).toBe('titleScene');
  });
});
