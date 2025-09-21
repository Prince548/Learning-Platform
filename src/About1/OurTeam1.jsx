import React from "react";
import styles from "./OurTeam1.module.css";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Founder & CEO",
    photo: "/team1.jpg",
    bio: "Passionate about coding education and empowering learners worldwide.",
  },
  {
    name: "Bob Smith",
    role: "Lead Java Instructor",
    photo: "/team2.jpg",
    bio: "Expert in Java with 10+ years of industry experience.",
  },
  {
    name: "Catherine Lee",
    role: "Python Specialist",
    photo: "/team3.jpg",
    bio: "Python guru focused on practical projects and real-world applications.",
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    photo: "/team2.jpg", // Make sure this image actually exists in /public
    bio: "Creating engaging and user-friendly web experiences.",
  },
    {
    name: "Alice Johnson",
    role: "Founder & CEO",
    photo: "/team1.jpg",
    bio: "Passionate about coding education and empowering learners worldwide.",
  },
  {
    name: "Bob Smith",
    role: "Lead Java Instructor",
    photo: "/team2.jpg",
    bio: "Expert in Java with 10+ years of industry experience.",
  },
  {
    name: "Catherine Lee",
    role: "Python Specialist",
    photo: "/team3.jpg",
    bio: "Python guru focused on practical projects and real-world applications.",
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    photo: "/team2.jpg", // Make sure this image actually exists in /public
    bio: "Creating engaging and user-friendly web experiences.",
  },
];

// Duplicate teamMembers to simulate 8 members (looping effect)
const fullTeam = [...teamMembers, ...teamMembers];

function OurTeam1() {
  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <p className={styles.subheading}>
        Our dedicated team is here to guide you through your coding journey.
      </p>

      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {fullTeam.map(({ name, role, photo, bio }, index) => (
            <div className={styles.card} key={index}>
              <img src={photo} alt={name} className={styles.photo} />
              <div className={styles.info}>
                <h3>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.bio}>{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam1;
