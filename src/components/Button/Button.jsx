import React from "react";
import "./Button.scss";

const Button = ({text, action}) => {
  return (
  <div id="btn" onClick={action}>{text}</div>
  )
};

export default Button;
