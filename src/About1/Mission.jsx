import React from "react";
import styles from "./Mission.module.css";

function Mission() {
  return (
    <div
      className={styles.missionContainer}
      style={{ backgroundImage: `url(/mission-bg.jpg)` }} // Image in public folder
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to democratize coding education by providing high-quality, accessible, and
            affordable learning experiences to students across the globe.
          </p>
          <p>
            We believe in empowering future developers, data scientists, and tech leaders through
            interactive learning paths, project-based curriculum, and a supportive learning community.
          </p>
          <p>
            Whether you are a complete beginner or looking to upskill, our platform is built to guide
            you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
