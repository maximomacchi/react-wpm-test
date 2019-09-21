import React, { useState, useEffect } from "react";

function Form({ wordToType, wordsTyped, incrementWordsTyped }) {
  const [input, setInput] = useState("");

  function updateInput(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    if (input === wordToType) {
      console.log("Word typed!");
      incrementWordsTyped();
      setInput("");
    }
  }, [input, wordToType, incrementWordsTyped]);

  return (
    <div>
      <h3>{wordToType}</h3>
      <h4>Words Typed: {wordsTyped}</h4>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={input} onChange={updateInput}></input>
      </form>
    </div>
  );
}

export default Form;
