import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
    gameReducer: gameReducer,
});
export default rootReducer;
