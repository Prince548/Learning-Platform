import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Practice.module.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function Practice() {
  return (
    <div className={styles.practiceContainer}>
      <div className={styles.practiceContent}>
        <Routes>
          <Route path="/" element={<><Page1 /><Page2 /></>} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Practice;
