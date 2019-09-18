import React, { useState, useEffect } from "react";
import "./styles/App.css";

import Timer from "./components/Timer";
import StartButton from "./components/Start-Button";
import { setServers } from "dns";

function App() {
  const [time, setTime] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);

  function startTest() {
    setTime(60);
    setWordsTyped(0);
  }

  useEffect(() => {
    let timeInterval = null;
    if (time > 0) {
      timeInterval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }
    return () => clearInterval(timeInterval);
  }, [time]);

  return (
    <div className="App">
      <Timer time={time} />
      <StartButton startTest={startTest} />
    </div>
  );
}

export default App;
