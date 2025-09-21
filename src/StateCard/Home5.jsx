import React from "react";
import styles from "./Home5.module.css";

const slides = [
  {
    img: "/group.jpg",
    title: "Empowering Instructors",
    description: "Create, manage, and launch your own classes with ease. Reach thousands of learners globally.",
  },
  {
    img: "/group.jpg",
    title: "Engage Students",
    description: "Access quality content, submit assignments, and interact with top instructors anytime, anywhere.",
  },
  {
    img: "/group.jpg",
    title: "Smart Learning Platform",
    description: "Track progress, receive instant feedback, and grow your skills on the go with BTEL.",
  },
  {
    img: "/group.jpg",
    title: "Collaborative Learning",
    description: "Students and instructors connect in a dynamic, interactive environment.",
  },
];

const Home5 = () => {
  // Duplicate slides for seamless loop
  const loopSlides = [...slides, ...slides];

  return (
    <section className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
        {loopSlides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.imageWrapper}>
              <img src={slide.img} alt="Slide" className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{slide.title}</h3>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home5;
