import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
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
