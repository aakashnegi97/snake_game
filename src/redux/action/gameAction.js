import * as actionType from "./actionTypes";

export const setHighScore = (score) => {
  return (dispatch,getState) => {
    dispatch({ type: actionType.SET_HIGH_SCORE, payload: score });
  };
};

export const setCurrentScore = (score) => {
  return (dispatch,getState) => {
    dispatch({ type: actionType.SET_CURRENT_SCORE, payload: score });
  };
};
