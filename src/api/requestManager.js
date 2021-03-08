import { getScoresRequest, setScoreRequest } from './requests';

const requests = {
  displayError(error) {
    const div = document.createElement('div');
    const content = document.createElement('h2');
    content.textContent = error;
    div.appendChild(content);
    document.querySelector('body').appendChild(div);
    return content;
  },
  async getScores() {
    try {
      const request = getScoresRequest();
      const response = await fetch(request);
      return response.json();
    } catch (error) {
      this.displayError(error);
      return null;
    }
  },
  async setScore(element) {
    try {
      const data = {
        user: element.user,
        score: element.score,
      };
      const request = setScoreRequest(data);
      const response = await fetch(request);
      return response.json();
    } catch (error) {
      this.displayError(error);
      return null;
    }
  },
};

export default requests;
