import React from 'react';
import styles from './Home.module.css';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';  // ✅ Import

const Home = () => {
  const navigate = useNavigate(); // ✅ Create navigator

  return (
    <section className={styles.hero}>
      <div className={styles.leftSection}>
        <h1>
          Welcome <span className={styles.highlight}>Bhoomi Techzone </span> <br />
         Learners
        </h1>
        <p>
          From interactive courses to premium study kits, EduSpark is your all-in-one global learning hub. <br />
          Explore. Enroll. Earn. All in one platform.
        </p>

        <div className={styles.buttonGroup}>
          {/* ✅ Add click handlers */}
          <button className={styles.primaryBtn} onClick={() => navigate('/courses')}>
            Explore Courses
          </button>
          <button className={styles.secondaryBtn} onClick={() => navigate('/practice')}>
            Start Free Trial
          </button>
        </div>

        <div className={styles.reviews}>
          <div className={styles.reviewBox}>
            <div className={styles.avatars}>
              {[1, 2, 3, 4].map((_, index) => (
                <FaUserCircle key={index} className={styles.avatarIcon} />
              ))}
            </div>
            <div className={styles.reviewText}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#facc15" />
                ))}
                <span className={styles.rating}>4.5/5 (80k Reviews)</span>
              </div>
              <p>
                Over <strong><CountUp end={50000} duration={3} separator="," />+</strong> learners engaged globally today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img src="/HDD.png" alt="Hero Student" className={styles.heroImage} />
        <div className={styles.badgeTopRight}>2k+ Experienced Instructor</div>
      </div>
      
    </section>
  );
};

export default Home;
