// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import styles from "./About.module.css";

// function About() {
//   return (
//     <div className={styles.aboutContainer}>
//       <h1>About E-Learning Platform</h1>
{/* 
      <nav className={styles.aboutNav}>
        <Link to="overview" className={styles.navLink}>Overview</Link>
        <Link to="team" className={styles.navLink}>Our Team</Link>
        <Link to="mission" className={styles.navLink}>Mission</Link>
        <Link to="vision" className={styles.navLink}>Vision</Link>
        <Link to="contact" className={styles.navLink}>Contact Us</Link>
      </nav> */}

      {/* <div className={styles.aboutContent}>
        <Outlet /> 
      </div> */}
    {/* </div>
  );
} */}

// export default About;



import React, { useState } from "react";
import style from'./About.module.css'

// import "./About.css";
import { Link, Outlet } from "react-router-dom";



const faqs = [
  {
    q: "What makes this e-learning platform different?",
    a: "We combine bite-sized lessons, hands-on projects, and real-time feedback. Our content is authored by industry experts and kept up-to-date with changing tech trends.",
  },
  {
    q: "Do I get certificates?",
    a: "Yes. Complete a course or a learning path to earn shareable certificates and digital badges you can add to LinkedIn and your resume.",
  },
  {
    q: "Can beginners start here?",
    a: "Absolutely. We start from fundamentals and gradually progress to advanced topics. Each course includes quizzes, code exercises, and guided projects.",
  },
  {
    q: "Is there any community support?",
    a: "Yes—join live doubt-clearing sessions, peer discussion forums, and mentor-led study groups to keep you accountable and motivated.",
  },
];

const About = () => {
  const [open, setOpen] = useState(0);

  return (
    <main className="about">
      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <h1>About Our E-Learning Platform</h1>
          <p>
            We’re on a mission to make high-quality tech education accessible,
            practical, and career-focused—so you can learn faster and build
            things that matter.
          </p>
          <div className="hero__cta">
            <a href="/courses" className="btn btn--primary">Explore Courses</a>
            <a href="/contact" className="btn btn--ghost">Talk to Us</a>
          </div>
        </div>
        <div className="hero__media" aria-hidden="true">
          <div className="hero__illustration" />
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="card">
          <h3>Project-First Learning</h3>
          <p>Build portfolio-ready projects while mastering concepts step-by-step.</p>
        </div>
        <div className="card">
          <h3>Interactive Practice</h3>
          <p>Quizzes, coding sandboxes, and checkpoints keep you sharp and engaged.</p>
        </div>
        <div className="card">
          <h3>Mentor Guidance</h3>
          <p>Live sessions and feedback loops so you never get stuck for long.</p>
        </div>
        <div className="card">
          <h3>Career Outcomes</h3>
          <p>Job-ready paths, interview prep, and real-world assignments.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" aria-label="Platform statistics">
        <div className="stat">
          <span className="stat__num">120K+</span>
          <span className="stat__label">Learners</span>
        </div>
        <div className="stat">
          <span className="stat__num">300+</span>
          <span className="stat__label">Expert-Led Courses</span>
        </div>
        <div className="stat">
          <span className="stat__num">4.8/5</span>
          <span className="stat__label">Avg. Course Rating</span>
        </div>
        <div className="stat">
          <span className="stat__num">85%</span>
          <span className="stat__label">Completion Rate</span>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach">
        <div className="approach__text">
          <h2>Our Approach</h2>
          <ul className="list">
            <li><strong>Learn by Doing:</strong> short videos → tasks → feedback.</li>
            <li><strong>Structured Paths:</strong> curated tracks from beginner to advanced.</li>
            <li><strong>Real Tools:</strong> Git, APIs, databases, cloud, and CI/CD.</li>
            <li><strong>Assessment:</strong> quizzes, code challenges, and capstones.</li>
          </ul>
        </div>
        <div className="approach__media" aria-hidden="true">
          <div className="screenshot-placeholder">Course Preview</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <h2>Why Learners Choose Us</h2>
        <div className="why__grid">
          <div className="why__item">
            <h4>Up-to-Date Content</h4>
            <p>Courses updated quarterly to match industry changes.</p>
          </div>
          <div className="why__item">
            <h4>Flexible & Self-Paced</h4>
            <p>Learn anywhere, anytime—on web or mobile.</p>
          </div>
          <div className="why__item">
            <h4>Transparent Roadmaps</h4>
            <p>Clear milestones and progress tracking keep you on course.</p>
          </div>
          <div className="why__item">
            <h4>Affordable Plans</h4>
            <p>Scholarships and EMI options to support every learner.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Learner Stories</h2>
        <div className="testimonials__row">
          <blockquote className="quote">
            <p>“The projects got me interview-ready. I landed my first dev role in 3 months.”</p>
            <footer>— Aditi, Frontend Developer</footer>
          </blockquote>
          <blockquote className="quote">
            <p>“Clean explanations, practical labs, and mentors who actually care.”</p>
            <footer>— Raghav, Data Analyst</footer>
          </blockquote>
          <blockquote className="quote">
            <p>“Way better than passive videos—this felt like real work experience.”</p>
            <footer>— Zoya, Backend Engineer</footer>
          </blockquote>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team__grid">
          <div className="member">
            <div className="avatar" aria-hidden="true"></div>
            <h4>Priya Sharma</h4>
            <p>Head of Curriculum • ex-FAANG</p>
          </div>
          <div className="member">
            <div className="avatar" aria-hidden="true"></div>
            <h4>Arjun Mehta</h4>
            <p>Lead Engineer • Cloud & DevOps</p>
          </div>
          <div className="member">
            <div className="avatar" aria-hidden="true"></div>
            <h4>Sara Khan</h4>
            <p>Learning Experience Designer</p>
          </div>
          <div className="member">
            <div className="avatar" aria-hidden="true"></div>
            <h4>Vikram Patel</h4>
            <p>Career Services & Mentorship</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>FAQs</h2>
        <div className="accordion" role="tablist" aria-label="Frequently Asked Questions">
          {faqs.map((item, idx) => (
            <div className="accordion__item" key={idx}>
              <button
                className="accordion__trigger"
                role="tab"
                aria-expanded={open === idx}
                aria-controls={`panel-${idx}`}
                id={`tab-${idx}`}
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                {item.q}
                <span className="accordion__icon" aria-hidden="true">
                  {open === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`accordion__panel ${open === idx ? "is-open" : ""}`}
                role="region"
                id={`panel-${idx}`}
                aria-labelledby={`tab-${idx}`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to start learning?</h2>
        <p>Pick a path, finish your first project this week, and move closer to your goals.</p>
        <a href="/signup" className="btn btn--primary">Create Your Account</a>
      </section>
    </main>
  );
};

export default About;



