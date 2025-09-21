import React from "react";
import styles from "./StatsCard.module.css";

const StatsCard = ({ title, value, icon, trend, color = "primary" }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.value}>{value}</div>
      {trend && (
        <div className={styles.trend}>
          {trend}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
