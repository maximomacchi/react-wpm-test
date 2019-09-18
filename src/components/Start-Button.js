import React from "react";

function StartButton({ startTest }) {
  return (
    <div>
      <button onClick={startTest}>Start Test</button>
    </div>
  );
}

export default StartButton;
