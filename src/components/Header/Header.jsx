import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header__user">
        <span className="header__username">User</span>
        <Button
          buttonText="Logout"
          handleClick={() => {}}
          data-testid="logout-btn"
        />
      </div>
    </header>
  );
}
