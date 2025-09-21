import React from "react";
import styles from "./QuickActions.module.css";

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: "Continue Learning",
      description: "Resume your last course",
      icon: "▶️",
      action: () => console.log("Continue learning"),
      primary: true
    },
    {
      id: 2,
      title: "Browse Courses",
      description: "Explore new subjects",
      icon: "🔍",
      action: () => console.log("Browse courses")
    },
    {
      id: 3,
      title: "Practice Tests",
      description: "Test your knowledge",
      icon: "📝",
      action: () => console.log("Practice tests")
    },
    {
      id: 4,
      title: "View Certificates",
      description: "See your achievements",
      icon: "🏆",
      action: () => console.log("View certificates")
    }
  ];

  return (
    <div className={styles.quickActions}>
      <h3 className={styles.title}>Quick Actions</h3>
      <div className={styles.actionsGrid}>
        {actions.map(action => (
          <button
            key={action.id}
            className={`${styles.actionCard} ${action.primary ? styles.primary : ''}`}
            onClick={action.action}
          >
            <span className={styles.icon}>{action.icon}</span>
            <div className={styles.content}>
              <h4>{action.title}</h4>
              <p>{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
