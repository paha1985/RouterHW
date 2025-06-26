import { NavLink, Outlet } from "react-router-dom";
import { AuthStatus } from "./auth-status";
import { Suspense } from "react";
import ErrorBoundary from "../../error-boundary";

export const Navbar = () => {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li style={{ marginLeft: "calc((100vw - 1000px)/2)" }}>
          <NavLink to="/">Главная страница</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Герои</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Локации</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Эпизоды</NavLink>
        </li>
      </ul>

      <ErrorBoundary>
        <Suspense fallback={<h1>"Загрузка..."</h1>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
