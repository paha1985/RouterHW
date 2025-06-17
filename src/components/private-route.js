import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-provider";

export function PrivateRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user === null) {
    console.log(auth.user);
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}
