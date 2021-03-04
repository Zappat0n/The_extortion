import requests from '../../api/requestManager';

test('displayError should a DOM Component with the error', () => {
  const content = requests.displayError('This error');
  expect(content.textContent).toBe('This error');
});

