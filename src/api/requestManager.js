import { getScoresRequest, setScoreRequest } from './requests';

const displayError = (error) => {
  const div = document.createElement('div');
  const content = document.createElement('h2');
  content.textContent = error;
  div.appendChild(content);
  document.querySelector('body').appendChild(div);
};

const requests = {
  getScores() {
    const request = getScoresRequest();
    return Promise.resolve(
      fetch(request)
        .then(response => response.json())
        .then((response) => response)
        .catch((error) => displayError(error)),
    );
  },
  setScore(element) {
    const data = {
      user: element.user,
      score: element.score,
    };
    const request = setScoreRequest(data);
    return Promise.resolve(
      fetch(request)
        .then((response) => response.json())
        .then((response) => response)
        .catch((error) => displayError(error)),
    );
  },
};

export default requests;
