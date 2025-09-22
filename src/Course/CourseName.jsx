import React from "react";
import { useNavigate } from "react-router-dom";
import { CourseData } from "./CourseData";
import styles from "./CourseName.module.css";

const CourseName = () => {
  const navigate = useNavigate();

  const handleBuyNow = (courseKey) => {
    navigate("/payment", { state: { course: courseData[courseKey] } });
  };

  return (
    <div className={styles.courseWrapper}>
      <header className={styles.navbar}>
        <h1>📚 Available Courses</h1>
      </header>

      <div className={styles.courseGrid}>
        {Object.entries(courseData).map(([key, course]) => (
          <div key={key} className={styles.courseCard}>
            <h2 className={styles.courseTitle}>{course.title}</h2>
            <p className={styles.courseDesc}>{course.desc}</p>

            <div className={styles.progress}>
              <span>Progress: {course.progress}%</span>
              <progress value={course.progress} max="100" />
            </div>

            <button
              className={styles.buyButton}
              onClick={() => handleBuyNow(key)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseName;
