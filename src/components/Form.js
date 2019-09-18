import React, { useState, useEffect } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  function updateInput(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    if (input === props.wordToType) {
      console.log("Word typed!");
      setInput("");
    }
  }, [input]);

  return (
    <div>
      <h3>{props.wordToType}</h3>
      <form>
        <input type="text" value={input} onChange={updateInput}></input>
      </form>
    </div>
  );
}

export default Form;
