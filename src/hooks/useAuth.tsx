import { use } from "react";
import { AuthContext, AuthContextType } from "../contexts/auth-context";

export const useAuth = (): AuthContextType => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};