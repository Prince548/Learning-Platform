import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = ({ username = "Student", avatarUrl, onAvatarClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "New course available: React Advanced", time: "2h ago", unread: true },
    { id: 2, text: "Assignment deadline tomorrow", time: "1d ago", unread: true },
    { id: 3, text: "Course completed: HTML Basics", time: "3d ago", unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className={styles.header}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeText}>
          Welcome back, <span className={styles.username}>{username}</span> 
          <span className={styles.waveEmoji}>👋</span>
        </h1>
        <p className={styles.subtitle}>
          Ready to continue your learning journey?
        </p>
      </div>
      
      <div className={styles.headerActions}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search courses..." 
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        {/* Notifications */}
        <div className={styles.notificationContainer}>
          <button 
            className={styles.notificationBtn}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔
            {unreadCount > 0 && (
              <span className={styles.notificationBadge}>{unreadCount}</span>
            )}
          </button>
          
          {showNotifications && (
            <div className={styles.notificationDropdown}>
              <div className={styles.notificationHeader}>
                <h3>Notifications</h3>
                <button className={styles.markAllRead}>Mark all read</button>
              </div>
              <div className={styles.notificationList}>
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`${styles.notificationItem} ${notification.unread ? styles.unread : ''}`}
                  >
                    <p>{notification.text}</p>
                    <small>{notification.time}</small>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className={styles.profile} onClick={onAvatarClick}>
          <img
            src={avatarUrl || "https://via.placeholder.com/40"}
            alt={`${username} profile avatar`}
            className={styles.avatar}
          />
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{username}</span>
            <span className={styles.profileRole}>Student</span>
          </div>
          <span className={styles.dropdownArrow}>▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
