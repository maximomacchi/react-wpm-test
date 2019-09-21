import React, { useState, useEffect } from "react";
import "./styles/App.css";

import Timer from "./components/Timer";
import StartButton from "./components/Start-Button";
import Form from "./components/Form";

const TEST_TIME = 10;
const wordsToType = [
  "hello",
  "hi",
  "test",
  "again",
  "hey",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again",
  "hello",
  "hi",
  "test",
  "again"
];

function App() {
  const [time, setTime] = useState(0);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [wordToType, setWordToType] = useState(wordsToType[wordsTyped]);
  const [testActive, setTestActive] = useState(false);

  function startTest() {
    setTime(TEST_TIME);
    setWordsTyped(0);
  }

  function incrementWordsTyped() {
    setWordsTyped(wordsTyped + 1);
  }

  useEffect(() => {
    setWordToType(wordsToType[wordsTyped]);
  }, [wordsTyped]);

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

  return (
    <div className="App">
      <Timer time={time} testActive={testActive} />
      <StartButton startTest={startTest} testActive={testActive} />
      <Form
        wordToType={wordToType}
        wordsTyped={wordsTyped}
        incrementWordsTyped={incrementWordsTyped}
        testActive={testActive}
      />
    </div>
  );
}

export default App;
