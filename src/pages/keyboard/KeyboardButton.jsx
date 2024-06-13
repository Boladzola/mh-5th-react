import React from "react";

const KeyboardButton = (props) => {
  // console.log(props);
  // const { content } = props;
  // return <button>{content}</button>;
  return (
    <button style={{ color: "green" }} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default KeyboardButton;
