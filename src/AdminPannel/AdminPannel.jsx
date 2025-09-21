import React, { useState, useEffect } from 'react';
import styles from './AdminPannel.module.css';
import { FaUsers, FaClock, FaBook, FaDollarSign, FaBell, FaSearch, FaChevronDown } from 'react-icons/fa';

const AdminPannel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data - you can replace with real data from your backend
  const statsData = {
    totalEnrolled: { value: '1.3K', change: '+5%', label: 'Total Enrolled' },
    timeSpent: { value: '40:23:13', change: '+8%', label: 'Time spent' },
    totalCourses: { value: '150', change: '+12%', label: 'Total Courses' },
    earnings: { value: '$6078.76', change: '+15%', label: 'Earnings' }
  };

  const submissionsData = [
    { id: '#0255-1', course: 'Course file updated', category: 'Basic', status: 'Rejected', action: 'Cancel' },
    { id: '#0254-1', course: 'Lecture added to server-1', category: 'Basic', status: 'Pending', action: 'Approve' },
    { id: '#0254-1', course: 'New video uploaded', category: 'Design', status: 'Pending', action: 'Approve' },
    { id: '#0253-1', course: 'Exercise task added', category: 'Data', status: 'Approved', action: 'Review' }
  ];

  const activitiesData = [
    'Submission NLP Programming',
    'QA Presentation',
    'Database administration',
    'React teacher Panel Discussion',
    'Submission Data Structures',
    'Submission HCI Module 6',
    'Teacher Panel Discussion',
    'Submission Data Structures'
  ];

  return (
    <div className={styles.adminContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>📚</div>
          <h3>Dashboard</h3>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navItem}>📊 Overview</div>
          <div className={styles.navItem}>👥 Students</div>
          <div className={styles.navItem}>📚 Courses</div>
          <div className={styles.navItem}>👨‍🏫 Instructors</div>
          <div className={styles.navItem}>💰 Revenue</div>
          <div className={styles.navItem}>📊 Analytics</div>
          <div className={styles.navItem}>⚙️ Settings</div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Welcome back, Patrick Heuston 👋</h1>
            <p>Track your system activity, progress & analytics from here</p>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.searchBox}>
              <FaSearch />
              <input type="text" placeholder="Search..." />
            </div>
            <div className={styles.dateInfo}>
              <span>{currentDate.getDate()} {currentDate.toLocaleString('default', { month: 'short' })} {currentDate.getFullYear()}</span>
              <span>{currentDate.toLocaleTimeString('en-US', { hour12: false })}</span>
            </div>
            <FaBell className={styles.notificationIcon} />
            <div className={styles.profileSection}>
              <img src="/ProfilePic.webp" alt="Profile" className={styles.profilePic} />
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className={styles.statsGrid}>
          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>
              <FaUsers />
            </div>
            <div className={styles.statsContent}>
              <h3>{statsData.totalEnrolled.value}</h3>
              <p>{statsData.totalEnrolled.label}</p>
              <span className={styles.statsChange}>{statsData.totalEnrolled.change}</span>
            </div>
          </div>
          
          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>
              <FaClock />
            </div>
            <div className={styles.statsContent}>
              <h3>{statsData.timeSpent.value}</h3>
              <p>{statsData.timeSpent.label}</p>
              <span className={styles.statsChange}>{statsData.timeSpent.change}</span>
            </div>
          </div>

          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>
              <FaBook />
            </div>
            <div className={styles.statsContent}>
              <h3>{statsData.totalCourses.value}</h3>
              <p>{statsData.totalCourses.label}</p>
              <span className={styles.statsChange}>{statsData.totalCourses.change}</span>
            </div>
          </div>

          <div className={styles.statsCard}>
            <div className={styles.statsIcon}>
              <FaDollarSign />
            </div>
            <div className={styles.statsContent}>
              <h3>{statsData.earnings.value}</h3>
              <p>{statsData.earnings.label}</p>
              <span className={styles.statsChange}>{statsData.earnings.change}</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className={styles.chartsSection}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Learning overview</h3>
              <div className={styles.chartControls}>
                <button>Monthly</button>
                <button>Weekly</button>
                <button>Daily</button>
              </div>
            </div>
            <div className={styles.chartContent}>
              <div className={styles.barChart}>
                <div className={styles.bar} style={{height: '60%'}}></div>
                <div className={styles.bar} style={{height: '80%'}}></div>
                <div className={styles.bar} style={{height: '40%'}}></div>
                <div className={styles.bar} style={{height: '90%'}}></div>
                <div className={styles.bar} style={{height: '70%'}}></div>
                <div className={styles.bar} style={{height: '85%'}}></div>
              </div>
            </div>
          </div>

          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <h3>Website visitor</h3>
              <span className={styles.visitorCount}>942</span>
            </div>
            <div className={styles.chartContent}>
              <div className={styles.lineChart}>
                <div className={styles.progressCircle}>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Submissions Table */}
          <div className={styles.tableCard}>
            <div className={styles.tableHeader}>
              <h3>Instructor's submission</h3>
              <div className={styles.tableFilters}>
                <select>
                  <option>Course Info</option>
                </select>
                <select>
                  <option>Comments from instructor</option>
                </select>
                <select>
                  <option>Category</option>
                </select>
                <select>
                  <option>Preview Status</option>
                </select>
              </div>
            </div>
            <div className={styles.tableContent}>
              <table>
                <thead>
                  <tr>
                    <th>Course Info</th>
                    <th>Comments from instructor</th>
                    <th>Category</th>
                    <th>Preview Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionsData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.course}</td>
                      <td>{item.category}</td>
                      <td>
                        <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button className={styles.actionBtn}>{item.action}</button>
                        <button className={styles.moreBtn}>⋯</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activities Panel */}
          <div className={styles.activitiesCard}>
            <div className={styles.activitiesHeader}>
              <h3>Instructor Activities</h3>
              <button>View all</button>
            </div>
            <div className={styles.activitiesList}>
              {activitiesData.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
                  <div className={styles.activityIcon}>📄</div>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
