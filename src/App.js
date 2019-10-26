import React, { useState, useEffect } from "react";
import "./styles/App.css";

import Timer from "./components/Timer";
import StartButton from "./components/Start-Button";
import Form from "./components/Form";

const TEST_TIME = 10;

function App() {
  const [time, setTime] = useState(0);
  const [wordsList, setWordsList] = useState(["test", "hello"]);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [testActive, setTestActive] = useState(false);

  function startTest() {
    fetch("https://baconipsum.com/api/?type=meat?format=json")
      .then(response => response.json())
      .then(json => {
        let wordsListToSet = [];
        for (let sentence in json) {
          wordsListToSet.push(json[sentence].split(" "));
        }
        wordsListToSet = [].concat.apply([], wordsListToSet);
        setWordsList(wordsListToSet);
        setTime(TEST_TIME);
        setWordsTyped(0);
      });
  }

  function incrementWordsTyped() {
    setWordsTyped(wordsTyped + 1);
  }

  // Logic for starting test timer
  useEffect(() => {
    let timeInterval = null;
    if (time > 0) {
      // Test in progress
      setTestActive(true);
      timeInterval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      // Test complete
      clearInterval(timeInterval);
      setTestActive(false);
    }
    return () => clearInterval(timeInterval);
  }, [time]);

  if (testActive) {
    return (
      <div className="App">
        <Timer time={time} />
        <Form
          wordsList={wordsList}
          wordsTyped={wordsTyped}
          incrementWordsTyped={incrementWordsTyped}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <StartButton startTest={startTest} />
        <div className="WPM">Your current typing speed is {wordsTyped} WPM</div>
      </div>
    );
  }
}

export default App;
