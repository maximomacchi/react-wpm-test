import React from "react";

function Timer({ time }) {
  if (time > 1) {
    return <div className="Timer">{time} seconds remaining</div>;
  } else {
    return <div className="Timer">{time} second remaining</div>;
  }
}

export default Timer;
