import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const singin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  const singout = (callback) => {
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
