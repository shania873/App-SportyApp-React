import React, { createContext } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        persist: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
