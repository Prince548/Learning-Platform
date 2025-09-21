import React from "react";
import Sidebar from "./Sidebar1";
import Header from "./Header";
import ActivityChart from "./ActivityChart";
import ProgressPie from "./ProgressPie";
import WeeklyStatusChart from "./WeeklyStatusChart";
import Assignments from "./Assignments";
import styles from "./Dashboard.module.css";

const TeacherDashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Header username="Gareth" />

        <div className={styles.welcomeCard}>
          <div>
            <h2>Hello, Gareth!</h2>
            <p>We’ve missed you! Check out what’s new and improved in your dashboard.</p>
            <button className={styles.exploreBtn}>Explore More Courses</button>
          </div>
          <img src="/illustration.png" alt="Welcome" />
        </div>

        <div className={styles.chartsWrapper}>
          <ActivityChart />
          <ProgressPie />
          <WeeklyStatusChart />
        </div>

        <Assignments />
      </div>
    </div>
  );
};

export default TeacherDashboard;
