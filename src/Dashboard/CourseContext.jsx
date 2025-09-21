// src/Dashboard/CourseContent.jsx
import React from "react";
import { useParams } from "react-router-dom";
import purchasedCourses from "../data/PurchasedCoursesData"; // ✅ import dummy data

const CourseContent = () => {
  const { courseId } = useParams();
  const course = purchasedCourses.find((c) => c.id === courseId);

  if (!course) return <p>Course not found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>📂 Course Modules</h3>
      <ul>
        {course.content.map((item) => (
          <li key={item.id}>
            {item.type === "video" ? (
              <a href={item.url} target="_blank" rel="noreferrer">
                🎥 {item.title}
              </a>
            ) : (
              <span>📝 {item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseContent;
