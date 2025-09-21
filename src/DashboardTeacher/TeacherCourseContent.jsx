import React, { useState } from "react";
import { useParams } from "react-router-dom";
import teacherCourses from "./DashboardTeacher/TeacherCoursesData";

const TeacherCourseContent = () => {
  const { courseId } = useParams();
  const course = teacherCourses.find((c) => c.id === courseId);

  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleType, setNewModuleType] = useState("video");
  const [newModuleUrl, setNewModuleUrl] = useState("");

  if (!course) return <p>Course not found.</p>;

  const addModule = (e) => {
    e.preventDefault();
    if (!newModuleTitle.trim()) return;

    const newModule = {
      id: Date.now(),
      title: newModuleTitle,
      type: newModuleType,
      url: newModuleType === "video" ? newModuleUrl : "",
    };

    course.content.push(newModule);
    setNewModuleTitle("");
    setNewModuleType("video");
    setNewModuleUrl("");
  };

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

      <h3>Add New Module</h3>
      <form onSubmit={addModule} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Module Title"
          value={newModuleTitle}
          onChange={(e) => setNewModuleTitle(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <select
          value={newModuleType}
          onChange={(e) => setNewModuleType(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="video">Video</option>
          <option value="document">Document</option>
        </select>
        {newModuleType === "video" && (
          <input
            type="text"
            placeholder="Video URL"
            value={newModuleUrl}
            onChange={(e) => setNewModuleUrl(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        )}
        <button
          type="submit"
          style={{ padding: "0.5rem", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
        >
          Add Module
        </button>
      </form>
    </div>
  );
};

export default TeacherCourseContent;