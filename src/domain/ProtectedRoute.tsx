import { useAuth } from "@hooks/useAuth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/login" replace state={{ path: location.pathname }} />;
};
