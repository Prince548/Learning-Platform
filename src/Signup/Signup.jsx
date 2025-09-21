import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    role: "student", // default role
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agreeTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Create user account
    const newUser = signup(formData);
    console.log("User registered:", newUser);
    alert("Registration successful!");

    // Navigate to home page after successful signup
    navigate("/");
  };

  return (
    <div className={styles["signup-main"]}>
      <div className={styles["image-section"]}>
        <img src="/Login.jpg" alt="Signup" className={styles["signup-img"]} />
      </div>

      <div className={styles["signup-container"]}>
        <h2>Create Your E-learning Account</h2>

        <div className={styles["signup-toggle"]}>
          <button
            type="button"
            className={`${styles["signup-btn"]} ${styles.active}`}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={styles["login-btn"]}
            onClick={() =>
              navigate(formData.role === "teacher" ? "/teacherlogin" : "/login")
            }
          >
            Login
          </button>
        </div>

        <p className={styles["signup-desc"]}>
          Join us today! It only takes a few steps.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label className={styles["signup-label"]}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={styles["signup-input"]}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["signup-label"]}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={styles["signup-input"]}
              required
            />
          </div>

          {/* Role Dropdown */}
          <div className={styles["form-group"]}>
            <label className={styles["signup-label"]}>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={styles["signup-input"]}
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["signup-label"]}>Password</label>
            <div className={styles["password-field"]}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className={styles["signup-input"]}
                required
              />
              <span
                className={styles["eye-icon"]}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FaEye />
              </span>
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["signup-label"]}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles["signup-input"]}
              required
            />
          </div>

          <div className={styles["checkbox-group"]}>
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />{" "}
              I agree to the Terms & Conditions
            </label>
          </div>

          <button type="submit" className={styles["submit-btn"]}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
