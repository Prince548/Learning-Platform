import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar1";
import Header from "./Header";
import ActivityChart from "./ActivityChart";
import ProgressPie from "./ProgressPie";
import WeeklyStatusChart from "./WeeklyStatusChart";
import Assignments from "./Assignments";
import LoadingSpinner from "../Dashboard/LoadingSpinner";
import ErrorBoundary from "../Dashboard/ErrorBoundary";
import styles from "./Dashboard.module.css";

const TeacherDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [teacherStats, setTeacherStats] = useState({});

  // Mock teacher data
  useEffect(() => {
    const loadTeacherData = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTeacherStats({
          totalStudents: 156,
          activeCourses: 8,
          pendingAssignments: 23,
          completionRate: 87
        });
        setError(null);
      } catch (err) {
        setError("Failed to load teacher dashboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTeacherData();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.main}>
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
            <p>Loading your teacher dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.main}>
          <div className={styles.errorContainer}>
            <div className={styles.errorContent}>
              <h2>Oops! Something went wrong</h2>
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className={styles.retryButton}>
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.main}>
          <Header username="Gareth" />

          {/* Enhanced Stats Cards */}
          <div className={styles.statsSection}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statContent}>
                <h3>{teacherStats.totalStudents}</h3>
                <p>Total Students</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📚</div>
              <div className={styles.statContent}>
                <h3>{teacherStats.activeCourses}</h3>
                <p>Active Courses</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📝</div>
              <div className={styles.statContent}>
                <h3>{teacherStats.pendingAssignments}</h3>
                <p>Pending Reviews</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📊</div>
              <div className={styles.statContent}>
                <h3>{teacherStats.completionRate}%</h3>
                <p>Completion Rate</p>
              </div>
            </div>
          </div>

          {/* Welcome Card */}
          <div className={styles.welcomeCard}>
            <div className={styles.welcomeContent}>
              <h2>Hello, Gareth! 👋</h2>
              <p>We've missed you! Check out what's new and improved in your teacher dashboard.</p>
              <div className={styles.welcomeActions}>
                <button className={styles.exploreBtn}>Create New Course</button>
                <button className={styles.secondaryBtn}>View Analytics</button>
              </div>
            </div>
            <div className={styles.welcomeImage}>
              <img src="/illustration.png" alt="Welcome" />
            </div>
          </div>

          {/* Charts Section */}
          <div className={styles.chartsWrapper}>
            <div className={styles.chartCard}>
              <h3>Student Activity</h3>
              <ActivityChart />
            </div>
            <div className={styles.chartCard}>
              <h3>Course Progress</h3>
              <ProgressPie />
            </div>
            <div className={styles.chartCard}>
              <h3>Weekly Performance</h3>
              <WeeklyStatusChart />
            </div>
          </div>

          {/* Assignments Section */}
          <div className={styles.assignmentsSection}>
            <h2 className={styles.sectionTitle}>Recent Assignments</h2>
            <Assignments />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TeacherDashboard;
