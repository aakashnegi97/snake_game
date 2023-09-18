import React from "react";
import { connect } from "react-redux";
import Snake from "./Snake";

const Arena = (props) => {
  const { highScore, currentScore } = props;
  return <div className="playground-arena" id="arena">
    <Snake />
  </div>;
};
const mapStateToProps = ({ gameReducer }) => ({
  highScore: gameReducer.highScore,
  currentScore: gameReducer.currentScore,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Arena);
