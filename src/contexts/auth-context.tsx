/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, ReactNode } from "react";

export interface AuthContextType {
  signed: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [signed, setSigned] = useState(false);

  const login = () => {
    setSigned(true);
  };

  const logout = () => {
    setSigned(false);
  };

  return (
    <AuthContext.Provider value={{ signed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
