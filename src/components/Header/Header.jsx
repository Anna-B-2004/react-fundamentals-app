import { Link, useNavigate } from "react-router-dom";
import logo from "./components/Logo/logo 1.png";
import "./Header.css";

export function Header() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  return (
    <header className="header">
      <Link to="/courses" className="logo">
        <img src={logo} alt="Logo" />
      </Link>

      {token && (
        <div className="header__right">
          <span className="header__username">{userName}</span>
          <button
            className="btn header__logout"
            onClick={() => {
              localStorage.clear();
              nav("/login");
            }}
          >
            LOGOUT
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
