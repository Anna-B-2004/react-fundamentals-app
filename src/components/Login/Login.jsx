import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { login } from "../../services";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      const { result: token, user } = await login({ email, password });
      localStorage.setItem("token", token);
      localStorage.setItem("userName", user.name);
      nav("/courses");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Login</h2>
      <div className="auth__card">
        <form className="auth__form" onSubmit={onSubmit}>
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

          <Button text="LOGIN" />
        </form>
      </div>
      <p>
        If you don't have an account you may&nbsp;
        <Link to="/registration">Registration</Link>
      </p>
    </section>
  );
}
