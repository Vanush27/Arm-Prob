import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "./ForgotPassword.module.css";

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
    // Handle password reset logic here (e.g., make an API call)
  };

  return (
    <div className={styles.container}>
      <h1>Forgot Password</h1>
      <p>Enter your email address to receive a password reset link.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@mail.com"
          required
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit" className={styles.reset_button}>
          Send Reset Link
        </button>
      </form>

      <Link to="/login" className={styles.login_link}>
        Remembered your password? Log in here
      </Link>
    </div>
  );
};

export default ForgotPassword;
