import React from "react";
import styles from "./Home4.module.css";

const Home4 = () => {
  const headingText = "What is Bhoomi E-learning platform?";

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.heading}>
        {headingText.split("").map((char, index) => (
          <span key={index} className={styles.letter} style={{ animationDelay: `${index * 0.05}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      <p className={styles.description}>
        <span className={styles.highlight}>BTEL</span> is a platform that allows educators to create online classes whereby they can
        store the course materials online; manage assignments, quizzes and exams; monitor
        due dates; grade results and provide students with feedback all in one place.
      </p>
    </section>
  );
};

export default Home4;
