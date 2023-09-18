import React from "react";
import { connect } from "react-redux";

const PlaygroundHeader = (props) => {
  const { highScore, currentScore } = props;
  return (
    <div className="playground-header">
      <p className="high-score">
        CURRENT SCORE: <span>{currentScore || 0}</span>
      </p>
      <p className="high-score">
        HIGH SCORE: <span>{highScore || 0}</span>
      </p>
    </div>
  );
};
const mapStateToProps = ({ gameReducer }) => ({
  highScore: gameReducer.highScore,
  currentScore: gameReducer.currentScore,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundHeader);
