import React, { useState } from "react";
import KeyboardButton from "./KeyboardButton";

//  variables
// const buttons = [
//   {
//     text: "AC",
//     func: (setter = () => {}) => {
//       return () => setter((prev) => prev.slice(0, prev.length - 1));
//     },
//     class: "AC",
//   },
//   {
//     text: "/",
//     // func: () => {},
//     class: "sign",
//   },
//   {
//     text: "*",
//     // func: () => {},
//     class: "sign",
//   },
// ];
// --------------------------------------------------------------------------
const Keyboard = () => {
  const [text, setText] = useState("");
  const backSpace = () => setText((prev) => prev.slice(0, prev.length - 1));
  const buttons = [
    {
      text: "AC",
      func: backSpace,
      class: "AC",
    },
    {
      text: "/",
      func: (text) => setText((prev) => prev + text),
      class: "sign",
    },
    {
      text: "*",
      func: (text) => setText((prev) => prev + text),
      class: "sign",
    },
  ];
  return (
    <div>
      <p className="textField">{text}</p>
      <div className="buttons">
        {buttons.map((buttonItem) => (
          <KeyboardButton
            key={buttonItem.text}
            text={buttonItem.text}
            setText={() => setText(text + buttonItem.text)}
            // setText={buttonItem.func}
            // setText={
            //   buttonItem.func
            //     ? buttonItem.func(setText)
            //     : () => setText((prev) => prev + text)
            // }
            className={buttonItem.class}
          />
        ))}
        {/* <button className="AC" onClick={backSpace}>
          AC
        </button>

        <KeyboardButton
          className={"sign"}
          text={"/"}
          setText={() => setText(text + "/")}
        />
        <KeyboardButton
          className={"sign"}
          text={"*"}
          setText={() => setText(text + "*")}
        /> */}
        {/* <button
          className="sign"
          onClick={() => {
            setText(text + "/");
          }}
        >
          /
        </button>

        {/* <button
          className="sign"
          onClick={() => {
            setText(text + "*");
          }}
        >
          *
        </button> */}
        <button
          onClick={() => {
            setText(text + "7");
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setText(text + "8");
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setText(text + "9");
          }}
        >
          9
        </button>
        <button
          className="sign"
          onClick={() => {
            setText(text + "-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setText(text + "4");
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setText(text + "5");
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setText(text + "6");
          }}
        >
          6
        </button>
        <button
          className="sign"
          onClick={() => {
            setText(text + "+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setText(text + "1");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setText(text + "2");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setText(text + "3");
          }}
        >
          3
        </button>
        <button
          className="equal"
          onClick={() => {
            setText(text + "=");
          }}
        >
          =
        </button>
        <button
          className="zero"
          onClick={() => {
            setText(text + "0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setText(text + ",");
          }}
        >
          ,
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
