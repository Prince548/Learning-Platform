
import React from "react";
const TeacherCourseCard = ({ title, studentCount, avgProgress, status }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.details}>👨‍🎓 Students: {studentCount}</p>
      <p className={styles.details}>📈 Progress: {avgProgress}%</p>
      <p className={styles.status}>
        Status: <strong>{status}</strong>
      </p>
    </div>
  );
};

export default TeacherCourseCard;
