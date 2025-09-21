

import React from "react";
import { Link } from "react-router-dom";
import TeacherCourseCard from "./TeacherCourseCard";
import teacherCourses from "./TeacherCourseData";
import styles from "./Dashboard.module.css";

const TeacherCoursesPage = () => {
  return (
    <div className={styles.myCoursesWrapper}>
      <h2 className={styles.sectionTitle}>📚 My Courses</h2>
      {teacherCourses.length === 0 ? (
        <p className={styles.noCourses}>
          You haven't created any courses yet.
        </p>
      ) : (
        <div className={styles.courseGrid}>
          {teacherCourses.map((course) => (
            <Link
              to={`/teacher/courses/${course.id}`}
              key={course.id}
              className={styles.courseCard}
            >
              <TeacherCourseCard
                title={course.title}
                studentCount={course.studentCount}
                avgProgress={course.avgProgress}
                status={course.status}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherCoursesPage;
