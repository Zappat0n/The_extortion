const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const GAME_ID = 'R52YD0HFYII5RH0TSzhv';

const getScoresRequest = () => new Request(`${baseUrl}games/${GAME_ID}/scores/`, {
  method: 'GET',
});


const setScoreRequest = (body) => new Request(`${baseUrl}games/${GAME_ID}/scores/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify(body),
});

export { getScoresRequest, setScoreRequest };
