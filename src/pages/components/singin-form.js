import { useState } from "react";
import Input from "../../components/common/Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-provider";

export const SigninForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  var users = require("../../data/users.json");
  const navigate = useNavigate();
  const auth = useAuth();

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
          navigate("/");
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

      <button type="submit" className="submitButton">
        Войти
      </button>
    </form>
  );
};
