import React from "react";

import { Link } from "react-router-dom";

const LoginScreen: React.FC = () => {
  return (
    <div className="login-container">
      <h1>LOG IN</h1>
      <p>Введите ваш email и пароль для входа.</p>

      <label>Email</label>
      <input type="email" placeholder="example@mail.com" />

      <label>Пароль</label>
      <input type="password" placeholder="********" />

      <Link to="/forgot-password" className="forgot-password">
        Забыли пароль?
      </Link>

      <button className="login-button">LOG IN</button>
    </div>
  );
};

export default LoginScreen;
