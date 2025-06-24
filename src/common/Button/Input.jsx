const Input = ({ placeholderText, labelText, onChange, ...rest }) => (
  <label>
    {labelText}
    <input
      type="text"
      placeholder={placeholderText}
      onChange={onChange}
      {...rest}
    />
  </label>
);

export default Input;
