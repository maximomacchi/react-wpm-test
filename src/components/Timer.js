import React from "react";

function Timer({ time, testActive }) {
  if (testActive && time > 1) {
    return <div className="Timer">{time} seconds remaining</div>;
  } else if (testActive && time === 1) {
    return <div className="Timer">{time} second remaining</div>;
  }
  return null;
}

export default Timer;
