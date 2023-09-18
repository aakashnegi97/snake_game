import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Playground from "../pages/playground";
import { connect } from "react-redux";
import * as actionCreator from "../redux/action/index";

const Routes = (props) => {
  const { setHighScore } = props;
  React.useEffect(() => {
    let score = localStorage.getItem("highScore");
    setHighScore(Number(score || 0));
  }, []);
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/playground" component={Playground}></Route>
      <Redirect to="/home" />
    </Switch>
  );
};
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => ({
  setHighScore: (score) => {
    dispatch(actionCreator.setHighScore(score));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
