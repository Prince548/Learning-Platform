import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import styles from "./Home2.module.css";

const stats = [
  { value: 15000, suffix: "+", label: "Students" },
  { value: 95, suffix: "%", label: "Total success" },
  { value: 35, suffix: "", label: "Main questions" },
  { value: 26, suffix: "", label: "Chief experts" },
  { value: 19, suffix: "", label: "Years of experience" },
];

const Home2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statItem}>
            <h3
              className={styles.statValue}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <CountUp end={item.value} duration={2} separator="," />{item.suffix}
            </h3>
            <p className={styles.statLabel}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home2;
