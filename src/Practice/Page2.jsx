import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Page2.module.css";

const courses = [
  { id: 1, title: "Java Basics", img: "/Java.webp", desc: "Test your knowledge of Java fundamentals." },
  { id: 2, title: "Python Programming", img: "/python.jpg", desc: "Evaluate your Python coding skills." },
  { id: 3, title: "Data Structures", img: "/DataDtructure.jpg", desc: "Check your grasp on core data structures." },
  { id: 4, title: "Web Development", img: "/WebDevolpment.jpg", desc: "Assess your frontend & backend knowledge." },
  { id: 5, title: "Database SQL", img: "/Sql.jpg", desc: "Test your SQL queries & DB concepts." },
  { id: 6, title: "Operating System", img: "/OperatingSystem.jpg", desc: "Analyze your OS concepts understanding." },
  { id: 7, title: "Computer Networks", img: "/CoputerNetwork2.jpg", desc: "Challenge your networking fundamentals." },
  { id: 8, title: "Machine Learning", img: "/MachineLearning.jpg", desc: "Measure your ML concepts & applications." },
];

const Page2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleStartTest = (courseId) => {
    navigate("/Practice/Page3");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Available Course Tests</h1>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={styles.card}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay={index * 100}
          >
            <div className={styles.imageContainer}>
              <img src={course.img} alt={course.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h2>{course.title}</h2>
              <p>{course.desc}</p>
              <button 
                className={styles.btn} 
                onClick={() => handleStartTest(course.id)}
              >
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
