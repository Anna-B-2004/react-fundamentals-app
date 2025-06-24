import React from "react";

export function Input({
  labelText,
  placeholderText,
  type = "text",
  value,
  onChange,
  ...rest
}) {
  return (
    <div>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        id={labelText}
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
