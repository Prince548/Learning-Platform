import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Dashboard/Header.module.css";

const Header = ({ username = "Teacher", avatarUrl }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();
  
  const [notifications] = useState([
    { id: 1, text: "New student enrolled in React Course", time: "1h ago", unread: true },
    { id: 2, text: "Assignment submissions pending review", time: "2h ago", unread: true },
    { id: 3, text: "Course analytics report ready", time: "1d ago", unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleProfileAction = (action) => {
    setShowProfileDropdown(false);
    
    switch(action) {
      case 'dashboard':
        navigate('/teacher-dashboard');
        break;
      case 'profile':
        navigate('/teacher-profile');
        break;
      case 'settings':
        navigate('/teacher-settings');
        break;
      case 'logout':
        // Handle logout logic
        localStorage.removeItem('user');
        navigate('/login');
        break;
      default:
        break;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeText}>
          Welcome back, <span className={styles.username}>{username}</span> 
          <span className={styles.waveEmoji}>👋</span>
        </h1>
        <p className={styles.subtitle}>
          Ready to inspire your students today?
        </p>
      </div>
      
      <div className={styles.headerActions}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search students, courses..." 
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

        {/* Profile with Dropdown */}
        <div className={styles.profileContainer}>
          <div 
            className={styles.profile} 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            <img
              src={avatarUrl || "https://via.placeholder.com/40"}
              alt={`${username} profile avatar`}
              className={styles.avatar}
            />
            <div className={styles.profileInfo}>
              <span className={styles.profileName}>{username}</span>
              <span className={styles.profileRole}>Teacher</span>
            </div>
            <span className={`${styles.dropdownArrow} ${showProfileDropdown ? styles.rotated : ''}`}>▼</span>
          </div>
          
          {showProfileDropdown && (
            <div className={styles.profileDropdown}>
              <div className={styles.dropdownHeader}>
                <img
                  src={avatarUrl || "https://via.placeholder.com/40"}
                  alt={`${username} avatar`}
                  className={styles.dropdownAvatar}
                />
                <div>
                  <h4>{username}</h4>
                  <p>Teacher Account</p>
                </div>
              </div>
              
              <div className={styles.dropdownDivider}></div>
              
              <div className={styles.dropdownMenu}>
                <button 
                  className={styles.dropdownItem}
                  onClick={() => handleProfileAction('dashboard')}
                >
                  <span className={styles.dropdownIcon}>📊</span>
                  Dashboard
                </button>
                
                <button 
                  className={styles.dropdownItem}
                  onClick={() => handleProfileAction('profile')}
                >
                  <span className={styles.dropdownIcon}>👤</span>
                  Profile
                </button>
                
                <button 
                  className={styles.dropdownItem}
                  onClick={() => handleProfileAction('settings')}
                >
                  <span className={styles.dropdownIcon}>⚙️</span>
                  Settings
                </button>
                
                <div className={styles.dropdownDivider}></div>
                
                <button 
                  className={`${styles.dropdownItem} ${styles.logoutItem}`}
                  onClick={() => handleProfileAction('logout')}
                >
                  <span className={styles.dropdownIcon}>🚪</span>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;