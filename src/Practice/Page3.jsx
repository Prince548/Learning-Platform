import React from "react";
import styles from "./Page3.module.css";

const levels = [
  { id: 1, title: "Level 1: Basic", desc: "Start with fundamental concepts." },
  { id: 2, title: "Level 2: Intermediate", desc: "Test your moderate knowledge." },
  { id: 3, title: "Level 3: Advance", desc: "Challenge yourself with advanced tests." },
];

const Page3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Choose Your Test Level</h1>
        <div className={styles.levels}>
          {levels.map((level) => (
            <div key={level.id} className={styles.card}>
              <h2>{level.title}</h2>
              <p>{level.desc}</p>
              <button className={styles.btn}>Start</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
