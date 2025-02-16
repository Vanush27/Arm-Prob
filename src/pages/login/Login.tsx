import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

type TLoginScreenProps = {
  onLogin: () => void;
};

const LoginScreen: React.FC<TLoginScreenProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    onLogin();
    navigate("/layout");
  };

  return (
    <div className="container">
      <h1>LOG IN</h1>
      <p>Введите ваш email и пароль для входа.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@mail.com"
          required
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Пароль</label>
        <input
          type="password"
          placeholder="password"
          required
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Link to="/forgot-password" className="forgot-password">
          Забыли пароль?
        </Link>

        <button type="submit" className="login-button">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
