// CourseAll.jsx
import React from "react";
import styles from "./CourseAll.module.css";
import { courseData } from "./courseData"; // import from correct data file

const CourseAll = ({ onSelectCourse }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>📚 All Available Courses</h1>

      <div className={styles.grid}>
        {Object.keys(courseData).map((courseKey, index) => {
          const course = courseData[courseKey];
          return (
            <div
              key={index}
              className={styles.card}
              onClick={() => onSelectCourse && onSelectCourse(courseKey)} // safe check
            >
              <h2>{course.title}</h2>
              <p>{course.desc}</p>
              <p className={styles.progress}>Progress: {course.progress}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseAll;
