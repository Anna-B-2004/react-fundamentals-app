import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import { createUser } from "../../services";
import "./Registration.css";

export function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      await createUser({ name, email, password });
      nav("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Registration</h2>
      <div className="auth__card">
        <form className="auth__form" onSubmit={onSubmit}>
          <Input
            labelText="Name"
            placeholderText="Input text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
          />
          {errors.name && <p>{errors.name}</p>}

          <Input
            labelText="Email"
            placeholderText="Input text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: undefined }));
            }}
          />
          {errors.email && <p>{errors.email}</p>}

          <Input
            labelText="Password"
            placeholderText="Input text"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: undefined }));
            }}
          />
          {errors.password && <p>{errors.password}</p>}

          <Button text="REGISTER" />
        </form>
      </div>
      <p>
        If you have an account you may&nbsp;
        <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default Registration;
