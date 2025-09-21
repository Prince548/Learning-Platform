import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "./courseData";
import styles from "./Courses.module.css"; // Or your CSS file

const Courses = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courseData[courseId];

  if (!course) {
    return (
      <div className={styles.courseWrapper}>
        <header className={styles.navbar}>
          <h1>Course Not Found</h1>
          <button className={styles.backButton} onClick={() => navigate("/courses")}>
            ⬅ Back to Courses
          </button>
        </header>
      </div>
    );
  }

  return (
    <div className={styles.courseWrapper}>
      <header className={styles.navbar}>
        <h1>{course.title}</h1>
        <button className={styles.backButton} onClick={() => navigate("/courses")}>
          ⬅ Back to Courses
        </button>
      </header>

      <main className={styles.content}>
        <p>{course.content}</p>
      </main>
    </div>
  );
};

export default Courses;
