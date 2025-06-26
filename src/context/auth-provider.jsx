import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);

  const singin = (newUser, callback) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    callback();
  };

  const singout = (callback) => {
    localStorage.removeItem("user");
    setUser(null);
    callback();
  };

  const value = {
    user,
    singin,
    singout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
