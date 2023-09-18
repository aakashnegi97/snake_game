import React from "react";

const SnakeHead = (props) => {
  const { currentPosition, index } = props;
  return (
    <div
      className="snake-head"
      style={{
        position: "absolute",
        top: currentPosition.top,
        right: currentPosition.right,
      }}
    ></div>
  );
};
export default SnakeHead;
