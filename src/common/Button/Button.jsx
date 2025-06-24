import React from "react";
import "./button.css";

export function Button({ buttonText, text, handleClick, onClick, ...rest }) {
  const label = buttonText ?? text ?? "Button";
  const clickHandler = handleClick ?? onClick;

  return (
    <button className="btn" onClick={clickHandler} {...rest}>
      {label}
    </button>
  );
}

export default Button;
