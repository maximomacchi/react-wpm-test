import React from "react";

function StartButton(props) {
  return (
    <div>
      <button onClick={props.startTest}>Start Test</button>
    </div>
  );
}

export default StartButton;
