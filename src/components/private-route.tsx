import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import React from "react";

export function PrivateRoute({children}: {children: React.ReactNode}) {
  const { signed } = useAuth();
  return signed ? children : <Navigate to="/" />;
}
