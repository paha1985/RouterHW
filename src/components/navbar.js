import { Link } from "react-router-dom";
import { AuthStatus } from "./auth-status";

export const Navbar = () => {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li style={{ marginLeft: "calc((100vw - 1000px)/2)" }}>
          <Link to="/">Главная страница</Link>
        </li>
        <li>
          <Link to="/characters">Герои</Link>
        </li>
        <li>
          <Link to="/locations">Локации</Link>
        </li>
        <li>
          <Link to="/episodes">Эпизоды</Link>
        </li>
      </ul>
    </div>
  );
};
