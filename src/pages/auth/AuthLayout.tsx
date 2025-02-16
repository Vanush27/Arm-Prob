import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";

const AuthLayout: React.FC = () => {
  return (
    <div className={styles.auth_layout}>
      <header>
        <h1>My Auth App</h1>
        {/* You can add additional content like branding or navigation */}
      </header>

      <main>
        <div className={styles.auth_container}>
          {/* The Outlet renders the child route content */}
          <Outlet />
        </div>
      </main>

      <footer>
        <p>&copy; 2025 My App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
