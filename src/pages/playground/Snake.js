import React from "react";
import SnakeHead from "./SnakeHead";
import * as actionCreator from "../../redux/action/index";
import { connect } from "react-redux";

const Snake = (props) => {
  const { setCurrentScore } = props;
  const [snakeHead, setSnakeHead] = React.useState([
    {
      top: 50,
      right: 0,
    },
    {
      top: 50,
      right: 5,
    },
    {
      top: 50,
      right: 10,
    },
    {
      top: 50,
      right: 15,
    },
    {
      top: 50,
      right: 20,
    },
  ]);

  const [maxArena, setMaxArena] = React.useState({
    height: 500,
    width: 500,
  });

  const [direction, setDirection] = React.useState("KeyD");

  const handlePosition = () => {
    setSnakeHead((position) => {
      let newPosition = position.map((currentPosition, index) => {
        if (index == 0) {
          let tempPos = {
            top: currentPosition.top + directionDirectory[direction].top,
            right: currentPosition.right + directionDirectory[direction].right,
          };
          if (tempPos.top < 0) {
            tempPos.top = maxArena.height - 10;
          } else if (tempPos.top > maxArena.height - 10) {
            tempPos.top = 10;
          }
          if (tempPos.right < 0) {
            tempPos.right = maxArena.width - 10;
          } else if (tempPos.right > maxArena.width) {
            tempPos.right = 3;
          }
          return { ...tempPos };
        } else {
          return { ...position[index - 1] };
        }
      });
      return [...newPosition];
    });
  };
  const handleDirection = (code) => {
    setDirection((data) => {
      if (
        directionDirectory[code].top + directionDirectory[data].top != 0 ||
        directionDirectory[code].right + directionDirectory[data].right != 0
      ) {
        return code;
      } else {
        return data;
      }
    });
  };

  const insertSnakeHead = () => {
    setSnakeHead((position) => {
      setCurrentScore(position.length - 4);
      return [...position, { ...position[position.length - 1] }];
    });
  };

  const keypress = ["KeyA", "KeyD", "KeyS", "KeyW"];
  const directionDirectory = {
    KeyA: { top: 0, right: 5 },
    KeyD: { top: 0, right: -5 },
    KeyS: { top: 5, right: 0 },
    KeyW: { top: -5, right: 0 },
  };

  React.useEffect(() => {
    let timer = setInterval(handlePosition, 25);
    return () => {
      clearInterval(timer);
    };
  }, [direction, maxArena]);

  React.useEffect(() => {
    let timer = setInterval(insertSnakeHead, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("keypress", (event) => {
      if (keypress.includes(event.code)) {
        handleDirection(event.code);
      }
    });
  }, []);

  React.useEffect(() => {
    const arena = document.getElementById("arena");
    setMaxArena(() => {
      return { height: arena.offsetHeight, width: arena.offsetWidth };
    });
  }, []);

  return (
    <div>
      {snakeHead.map((data, index) => {
        return <SnakeHead currentPosition={data} index={index} />;
      })}
    </div>
  );
};
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => ({
  setCurrentScore: (score) => dispatch(actionCreator.setCurrentScore(score)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Snake);
