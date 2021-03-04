import requests from '../../api/requestManager';

test('should return an Array', () => {
  const response = requests.displayError('');
  expect(response).toBe(true);
});
