import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { useHistory } from "react-router-dom";
import Button from "../../components/button/button";

const Home = (props) => {
  const { highScore } = props;
  const history = useHistory();

  const handleStart = () => {
    history.push("/playground");
  };
  return (
    <div className="home-screen">
      <div className="sub-container">
        <div>
          <p className="high-score">
            HIGH SCORE: <span>{highScore || 0}</span>
          </p>
        </div>
        <div>
          <Button onClick={handleStart} text="START" />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ gameReducer }) => ({
  highScore: gameReducer.highScore,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
