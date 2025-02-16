import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginScreen from "./pages/login/Login";
import RegisterScreen from "./pages/register/Register";
import ForgotPasswordScreen from "./pages/forgot/ForgotPasswordScreen";
import Home from "./pages/home/Home";
import ProtectedRoute from "./pages/protectedRoute/ProtectedRoute";
import LayoutScreen from "./pages/layout/Layout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const navigate = useNavigate();

  // Simulate login (for demonstration purposes)
  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      </Route>

      {/* Protected route for Home */}
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/layout" element={<LayoutScreen />} />
      </Route>

      {/* Add the logout route if needed */}
      <Route
        path="/logout"
        element={
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        }
      />
    </Routes>
  );
}

export default App;
