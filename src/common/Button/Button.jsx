import React from "react";
import "./button.css";

const Button = ({ buttonText, handleClick, variant = "", ...rest }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`btn ${variant}`}
    {...rest}
  >
    {buttonText}
  </button>
);
export default Button;
