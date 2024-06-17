import React from "react";
import "./global.css";

const KeyboardButton = ({ text, setText, className }) => {
  return (
    <button className={className} onClick={setText}>
      {text}
    </button>
  );
};

export default KeyboardButton;
