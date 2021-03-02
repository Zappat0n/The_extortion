import { getScoresRequest, setScoreRequest } from './requests';
import displayError from './display_errors';

const requests = {
  setScore(element) {
    const data = {
      user: element.user.value,
      score: element.score.value,
    };
    const request = setScoreRequest(data);
    fetch(request)
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => displayError(error));
  },
  getScores() {
    const request = getScoresRequest();
    fetch(request)
      .then(response => response.json())
      .then((response) => response)
      .catch((error) => displayError(error));
  },
};

export default requests;
