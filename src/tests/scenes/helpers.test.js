import { createForm, sortScores } from '../../scenes/helpers';

describe('Helpers for scenes', () => {
  test('Sort scores', () => {
    const data = [{ score: 1 }, { score: 3 }, { score: 2 }];
    expect(typeof data).toBe('object');
    expect(JSON.stringify(sortScores(data))).toBe(
      JSON.stringify([{ score: 3 }, { score: 2 }, { score: 1 }]),
    );
  });

  test('createForm generates the right form', () => {
    const form = createForm().create();
    expect(document.querySelector('body').children.length).toBe(1);
    expect(form.children.length).toBe(3);
    expect(form.children[0].textContent).toBe('You got a Highscore!');
    expect(form.children[1].children[1].getAttribute('type')).toBe('text');
    expect(form.children[2].getAttribute('type')).toBe('submit');
  });
});
