import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the child components (e.g., Home) if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
