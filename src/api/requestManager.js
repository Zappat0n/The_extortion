import { getScoresRequest, setScoreRequest } from './requests';
import displayError from './display_errors';

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
