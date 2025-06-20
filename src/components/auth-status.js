import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-provider";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSingout = () => {
    auth.singout(() => {
      navigate("/");
    });
  };

  if (auth.user === null) {
    return <p>You are not logged in</p>;
  }
  return (
    <p>
      Welcome user {auth.user}
      <button onClick={handleSingout}>Sign out</button>
    </p>
  );
}
