import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      {/* === Top Section === */}
      <div className={styles.footerTop}>
        {/* Company Info */}
        <div className={styles.footerColumn}>
          <img src="/logo.jpg" alt="EduSpark Logo" className={styles.logo} />
          <h3 className={styles.companyName}>Bhoomi TechZone</h3>
          <p>A43 Sector 63 Noida</p>
          <p>Uttar Pradesh, India</p>
          <p>Pin - 201309</p>
        </div>

        {/* Learning */}
        <div className={styles.footerColumn}>
          <h4>Learning</h4>
          <ul>
            <li>
              <button
                onClick={() => handleNavigation('/practice')}
                className={styles.linkButton}
              >
                Online Classes
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/courses')}
                className={styles.linkButton}
              >
                Study Materials
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/courses')}
                className={styles.linkButton}
              >
                Tutorials
              </button>
            </li>
          </ul>
        </div>

        {/* Exercise */}
        <div className={styles.footerColumn}>
          <h4>Exercise</h4>
          <ul>
            <li>
              <button
                onClick={() => handleNavigation('/practice')}
                className={styles.linkButton}
              >
                Daily Practice
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/practice')}
                className={styles.linkButton}
              >
                Quizzes
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/practice')}
                className={styles.linkButton}
              >
                Assignments
              </button>
            </li>
          </ul>
        </div>

        {/* Course */}
        <div className={styles.footerColumn}>
          <h4>Course</h4>
          <ul>
            <li>
              <button
                onClick={() => handleNavigation('/coursesall')}
                className={styles.linkButton}
              >
                All Courses
              </button>
            </li>
          </ul>
        </div>

        {/* Team */}
        <div className={styles.footerColumn}>
          <h4>Our Team</h4>
          <ul>
            <li>
              <button
                onClick={() => handleNavigation('/OurTeam1')}
                className={styles.linkButton}
              >
                Meet the Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/about')}
                className={styles.linkButton}
              >
                Careers
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* === Social Media === */}
      <div className={styles.footerMiddle}>
        <a
          href="https://www.facebook.com/Bhoomitechzonepvt.ltd"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/bhoomitechzone/"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/bhoomi-techzone-pvt-ltd/"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/BhoomiTechZone"
          className={styles.socialIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>

      {/* === Bottom === */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Bhoomi E-learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
