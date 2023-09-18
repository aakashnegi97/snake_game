import React from "react";
import "../../App.css";
import PlaygroundHeader from "./PlaygroundHeader";
import Arena from "./Arena";

const Playground = () => {
  return (
    <div className="playground-container">
      <PlaygroundHeader />
      <Arena />
    </div>
  );
};

export default Playground;
