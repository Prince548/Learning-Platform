import React from "react";
import teacherCourses from "../data/TeacherCoursesData";
import styles from "../Dashboard/Dashboard.module.css";

const TeacherAnalytics = () => {
  return (
    <div className={styles.myCoursesWrapper}>
      <h2 className={styles.sectionTitle}>📊 Course Analytics</h2>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {
          "type": "bar",
          "data": {
            "labels": ${JSON.stringify(teacherCourses.map((course) => course.title))},
            "datasets": [
              {
                "label": "Average Student Progress (%)",
                "data": ${JSON.stringify(teacherCourses.map((course) => course.avgProgress))},
                "backgroundColor": ["#1abc9c", "#3498db", "#e74c3c"],
                "borderColor": ["#16a085", "#2980b9", "#c0392b"],
                "borderWidth": 1
              }
            ]
          },
          "options": {
            "scales": {
              "y": {
                "beginAtZero": true,
                "max": 100,
                "title": {
                  "display": true,
                  "text": "Progress (%)"
                }
              },
              "x": {
                "title": {
                  "display": true,
                  "text": "Courses"
                }
              }
            },
            "plugins": {
              "legend": {
                "display": true,
                "position": "top"
              }
            }
          }
        }
      </div>
    </div>
  );
};

export default TeacherAnalytics;