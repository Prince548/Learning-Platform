import React from "react";
import styles from "./Page1.module.css";

const Page1 = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>PRACTICE & CODING PLAYGROUND</h1>
        <p>Your Journey To Become Coding Expert Begins Here</p>
        <div className={styles.subText}>
          Guaranteed Result | <span>100% FREE</span>
        </div>
        <button className={styles.ctaButton}>✔ START CODING</button>
      </div>
    </section>
  );
};

export default Page1;
