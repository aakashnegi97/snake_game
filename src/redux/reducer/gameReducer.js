import * as actionType from "../action/actionTypes";

const initialState = {
  highScore: 0,
  currentScore: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_HIGH_SCORE:
      return updateHighScore(payload, state);
    case actionType.SET_CURRENT_SCORE:
      return updateCurrentScore(payload, state);
    default:
      return state;
  }
};
export default reducer;

const updateHighScore = (score, state) => {
  return { ...state, highScore: score };
};

const updateCurrentScore = (score, state) => {
  let highScore = state.highScore;
  if (highScore < score) {
    localStorage.setItem("highScore", score);
    highScore = score;
  }
  return { ...state, currentScore: score, highScore: highScore };
};
