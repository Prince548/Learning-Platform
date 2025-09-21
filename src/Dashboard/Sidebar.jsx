import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>E-Learn</h2>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            My Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
