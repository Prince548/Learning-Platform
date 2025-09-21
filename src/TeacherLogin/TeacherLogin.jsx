import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./TeacherLogin.module.css";

const TeacherLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add authentication logic here
    console.log("Form submitted:", formData);

    // Redirect after login
    navigate("/teacherdashboard");
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginWrapper}>
        <div className={styles.imageSection}>
          <img src="/Login.jpg" alt="Student" className={styles.loginImg} />
        </div>
        <div className={styles.loginContainer}>
          <h2>Welcome to E-world e-learning!</h2>
          <div className={styles.loginToggle}>
            <button
              type="button"
              className={`${styles.loginBtn} ${styles.loginBtnActive}`}
            >
              Login
            </button>
          </div>
          <p className={styles.loginDesc}>
            Learn lorem is simply dummy text of printing and typesetting
            industry.
          </p>
          <form onSubmit={handleSubmit}>
            <label className={styles.loginLabel}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={styles.loginInput}
              required
            />

            <label className={styles.loginLabel}>Password</label>
            <div className={styles.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={styles.loginInput}
                required
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FaEye />
              </span>
            </div>

            <div className={styles.loginOptions}>
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />{" "}
                Remember Me
              </label>
              <a href="#" className={styles.forgotLink}>
                Forgot Password   T?
              </a>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
