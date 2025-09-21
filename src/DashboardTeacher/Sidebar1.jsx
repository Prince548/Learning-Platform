import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar1.module.css";

const Sidebar1 = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>E-Learn Teacher</h2>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            My Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher/notifications"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher/profile"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teacher/settings"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar1;
