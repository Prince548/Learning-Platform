// Dashboard/MyCourses.jsx

import React from "react";
import { Link } from "react-router-dom";
import purchasedCourses from "../data/PurchasedCoursesData"; // ✅ dummy data
import styles from "./Dashboard.module.css"; // your shared styles

const MyCourses = () => {
  return (
    <div className={styles.myCoursesWrapper}>
      <h2 className={styles.sectionTitle}>📚 My Courses</h2>

      {purchasedCourses.length === 0 ? (
        <p className={styles.noCourses}>You haven't purchased any courses yet.</p>
      ) : (
        <div className={styles.courseGrid}>
          {purchasedCourses.map((course) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id}
              className={styles.courseCard}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className={styles.courseImage}
              />
              <div className={styles.courseInfo}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
