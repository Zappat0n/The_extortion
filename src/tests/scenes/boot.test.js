import BootScene from '../../scenes/boot';

describe('Boot Scene', () => {
  test('Scene is created correctly', () => {
    const scene = new BootScene({
      active: true,
    });
    expect(scene.sys.config).toBe('bootScene');
  });
});
