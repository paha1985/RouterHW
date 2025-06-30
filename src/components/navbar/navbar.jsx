import { NavLink, Outlet } from "react-router-dom";

import { Suspense, useState } from "react";

import "./navbar.css"; // Создадим отдельный CSS файл
import { AuthStatus } from "../auth-status";
import ErrorBoundary from "../../../error-boundary";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <AuthStatus />

      {/* Гамбургер-меню для мобильных */}
      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Навигационное меню */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end>
              Главная
            </NavLink>
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
      </nav>

      <ErrorBoundary>
        <Suspense fallback={<div className="loading">Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
