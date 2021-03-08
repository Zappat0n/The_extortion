import PreloadScene from '../../scenes/preload';

describe('Preload Scene', () => {
  test('Scene is created correctly', () => {
    const scene = new PreloadScene({
      active: true,
    });
    expect(scene.sys.config).toBe('preloadScene');
  });
});
