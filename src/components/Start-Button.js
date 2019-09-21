import React from "react";

function StartButton({ startTest, testActive }) {
  if (!testActive) {
    return (
      <div>
        <button onClick={startTest}>Start Test</button>
      </div>
    );
  }
  return null;
}

export default StartButton;
