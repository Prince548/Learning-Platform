import React from "react";
import styles from "./About.module.css";

function AboutOverview() {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.textSection}>
        <h2>Empowering Minds Through Code</h2>
        <p>
          Welcome to our e-learning platform! We offer in-depth coding courses 
          across multiple programming languages like <strong>Java</strong>, <strong>Python</strong>, 
          <strong> JavaScript</strong>, <strong>C++</strong>, and more.
        </p>
        <p>
          Whether you're a beginner or an experienced developer, our structured 
          lessons, interactive challenges, and real-world projects will help you 
          become a confident programmer.
        </p>
        <p>
          Join thousands of learners and start your journey in software development, 
          data science, web development, and more — from anywhere, at any time.
        </p>
      </div>

      <div className={styles.imageSection}>
  <img src="/images/coding.jpg" alt="Coding illustration" />
</div>

    </div>
  );
}

export default AboutOverview;
