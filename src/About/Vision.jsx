import React from "react";
import styles from "./Vision.module.css";

function Vision() {
  return (
    <div className={styles.visionContainer}>
      <div className={styles.visionContent}>
        <div className={styles.textSection}>
          <h2>Our Vision</h2>
          <p>
            At our e-learning platform, we envision a world where anyone, anywhere can unlock their potential through the power of technology.
          </p>
          <p>
            We strive to break down barriers to education by building a vibrant global learning community where learners grow with confidence and purpose.
          </p>
          <p>
            Our goal is to shape the next generation of coders, creators, and innovators by fostering curiosity, creativity, and lifelong learning.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src="/vision.jpg" alt="Vision illustration" />
          {/* Assuming vision.jpg is inside public folder */}
        </div>
      </div>
    </div>
  );
}

export default Vision;
