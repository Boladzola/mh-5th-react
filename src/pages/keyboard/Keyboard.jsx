import React, { useState } from "react";
import KeyboardButton from "./KeyboardButton";

// variables
const buttonsData = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// ---------------------------------------------------------------
const Keyboard = () => {
  // const [value, setValue] = useState("")
  const [text, setText] = useState("");
  return (
    <div>
      <p className="textField">{text}</p>
      <div>
        {buttonsData.map((item) => (
          // <KeyboardButton content={item} onClick={() => setText(text + item)} />
          <KeyboardButton
            content={item}
            onClick={() => setText((prev) => prev + item)}
          />
        ))}
        {/* <KeyboardButton content={"1"} onClick={() => setText(text + "1")} />
        <KeyboardButton content={"2"} onClick={() => setText(text + "2")} />
        <KeyboardButton content={"3"} onClick={() => setText(text + "3")} />
        <KeyboardButton content={"4"} onClick={() => setText(text + "4")} /> */}
        {/* <button onClick={() => setText(text + "4")}>
          4
        </button> */}
      </div>
    </div>
  );
};

export default Keyboard;
