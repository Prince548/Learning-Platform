import React from 'react';
import { FaUsers, FaClock, FaBook, FaDollarSign, FaChartBar, FaTrendingUp } from 'react-icons/fa';
import styles from './Overview.module.css';

const Overview = ({ statsData, submissionsData, activitiesData }) => {
  return (
    <div className={styles.overviewContainer}>
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
  );
};

export default Overview;
