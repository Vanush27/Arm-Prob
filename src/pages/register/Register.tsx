import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterScreen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    // Handle registration logic here (e.g., make an API call)
  };

  return (
    <div className="container">
      <h1>REGISTER</h1>
      <p>Введите ваш email и пароль для регистрации.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@mail.com"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Пароль</label>
        <input
          type="password"
          placeholder="********"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Подтвердите пароль</label>
        <input
          type="password"
          placeholder="********"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <button type="submit" className="register-button">
          REGISTER
        </button>
      </form>

      <Link to="/login" className="login-link">
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default RegisterScreen;
