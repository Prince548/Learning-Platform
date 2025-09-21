import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = ({ 
  title, 
  progress, 
  status, 
  difficulty = "Beginner",
  duration = "4 weeks",
  thumbnail,
  lastAccessed = "Never",
  onContinue,
  onViewDetails 
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#28a745";
      case "In Progress":
        return "#007acc";
      case "Almost Complete":
        return "#ffc107";
      default:
        return "#6c757d";
    }
  };

  const getDifficultyBadgeColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "#28a745";
      case "Intermediate":
        return "#ffc107";
      case "Advanced":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  return (
    <div className={styles.card}>
      {thumbnail && (
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt={`${title} thumbnail`} />
          <div className={styles.overlay}>
            <button 
              className={styles.playButton}
              onClick={onContinue}
              aria-label={`Continue ${title}`}
            >
              ▶️
            </button>
          </div>
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span 
            className={styles.difficultyBadge}
            style={{ backgroundColor: getDifficultyBadgeColor(difficulty) }}
          >
            {difficulty}
          </span>
        </div>
        
        <div className={styles.metadata}>
          <span className={styles.duration}>⏱️ {duration}</span>
          <span 
            className={styles.status}
            style={{ color: getStatusColor(status) }}
          >
            {status}
          </span>
        </div>
        
        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span>Progress</span>
            <span className={styles.progressValue}>{progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ 
                width: `${progress}%`,
                backgroundColor: getStatusColor(status)
              }}
            ></div>
          </div>
        </div>
        
        <div className={styles.footer}>
          <span className={styles.lastAccessed}>
            Last accessed: {lastAccessed}
          </span>
          <div className={styles.actions}>
            {progress > 0 ? (
              <button 
                className={styles.continueBtn}
                onClick={onContinue}
              >
                Continue
              </button>
            ) : (
              <button 
                className={styles.startBtn}
                onClick={onContinue}
              >
                Start Course
              </button>
            )}
            <button 
              className={styles.detailsBtn}
              onClick={onViewDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
