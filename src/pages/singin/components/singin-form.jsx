import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import users from "../../../data/users.json";
import { Button } from "@mui/material";
import Input from "../../../components/common/input/input";
import { useAuth } from "../../../context/auth-provider";

export const SinginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.filter((user) => user.email === email);
    if (user.length === 0) {
      setEmailError("Неверный email");
      return;
    } else {
      setEmailError("");
      if (user[0].password === password) {
        setPassError("");
        auth.singin(email, () => {
          navigate(from, { replace: true });
        });
      } else {
        setPassError("Неверный пароль");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Email"
        description=""
        placeholder="Введите ваш email"
        error={emailError}
        required
        size="md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        label="Пароль"
        placeholder="Введите ваш пароль"
        required
        size="md"
        value={password}
        error={passError}
        onChange={(e) => setPassword(e.target.value)}
        variant=""
      />

      <Button
        variant="contained"
        color="success"
        type="submit"
        className="submitButton"
      >
        Войти
      </Button>
    </form>
  );
};
