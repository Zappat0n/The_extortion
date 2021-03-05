import requests from '../api/requestManager';

const sortScores = (leaderboard) => leaderboard.sort((a, b) => b.score - a.score);

const createForm = (game) => {
  const addButton = () => {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.classList.add('button');
    return button;
  };

  const addField = (field, text, type, required, value, className) => {
    const div = document.createElement('div');
    div.classList.add('form_field');

    const label = document.createElement('label');
    label.setAttribute('for', field);
    label.textContent = text;
    const input = document.createElement('input');
    input.classList.add(className);
    input.setAttribute('type', type);
    input.setAttribute('name', field);
    input.setAttribute('id', field);
    input.focus();
    if (required) {
      input.setAttribute('required', true);
    }
    if (value != null) {
      input.setAttribute('value', value);
    }
    div.appendChild(label);
    div.appendChild(input);
    return div;
  };

  const updateLeaderboard = (name) => {
    const user = {
      user: name,
      score: game.score,
    };
    requests.setScore(user).then(() => {
      const body = document.querySelector('body');
      const form = document.querySelector('#main_form');
      body.removeChild(form);
      game.scene.start('leaderboardScene');
    });
  };

  const create = () => {
    const form = document.createElement('form');
    const title = document.createElement('h2');
    title.textContent = 'You got a Highscore!';
    document.querySelector('body').appendChild(form);
    form.appendChild(title);
    form.setAttribute('id', 'main_form');
    form.classList.add('form');
    form.appendChild(addField('name', 'Please introduce your name', 'text', true, null, 'input_name'));
    form.appendChild(addButton());
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      updateLeaderboard(e.target.elements.name.value);
    });
    return form;
  };

  return { create };
};

export { createForm, sortScores };
