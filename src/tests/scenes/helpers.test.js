import { createForm, sortScores } from '../../scenes/helpers';
import { mockGetScores } from '../mocks/functionsMock';


describe('Helpers for scenes', () => {
  test('Sort scores', () => {
    const data = mockGetScores().result;
    expect(typeof data).toBe('object');
    expect(JSON.stringify(sortScores(data))).toBe(
      JSON.stringify([{ user: 'B', score: 3 }, { user: 'C', score: 2 }, { user: 'A', score: 1 }]),
    );
  });

  const form = createForm().create();

  test('createForm generates the form', () => {
    expect(document.querySelector('body').children.length).toBe(1);
  });

  test('form is correctly build', () => {
    expect(form.children.length).toBe(3);
    expect(form.children[0].textContent).toBe('You got a Highscore!');
    expect(form.children[1].children[1].getAttribute('type')).toBe('text');
    expect(form.children[2].getAttribute('type')).toBe('submit');
  });
});
