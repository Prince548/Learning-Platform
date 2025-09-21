import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CourseCard from "./CourseCard";
import ActivityChart from "./ActivityChart";
import WeeklyStatusChart from "./WeeklyStatusChart";
import LoadingSpinner from "./LoadingSpinner";
import ErrorBoundary from "./ErrorBoundary";
import StatsCard from "./StatsCard";
import QuickActions from "./QuickActions";
import styles from "./Dashboard.module.css";
import "./Dashboard.responsive.css";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({});
  const [user, setUser] = useState({ name: "Student", avatar: null });
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - in real app, this would come from API
  const mockCourses = [
    { 
      id: 1, 
      title: "HTML & CSS", 
      progress: 70, 
      status: "In Progress",
      difficulty: "Beginner",
      duration: "4 weeks",
      thumbnail: "/public/WebDevolpment.jpg",
      lastAccessed: "2 hours ago",
      rating: 4.8,
      students: 1250
    },
    { 
      id: 2, 
      title: "JavaScript Basics", 
      progress: 40, 
      status: "In Progress",
      difficulty: "Intermediate",
      duration: "6 weeks",
      thumbnail: "/public/Java.webp",
      lastAccessed: "1 day ago",
      rating: 4.7,
      students: 980
    },
    { 
      id: 3, 
      title: "Python Backend", 
      progress: 0, 
      status: "Not Started",
      difficulty: "Advanced",
      duration: "8 weeks",
      thumbnail: "/public/python.jpg",
      lastAccessed: "Never",
      rating: 4.9,
      students: 750
    },
    { 
      id: 4, 
      title: "Data Structures", 
      progress: 85, 
      status: "Almost Complete",
      difficulty: "Advanced",
      duration: "10 weeks",
      thumbnail: "/public/DataDtructure.jpg",
      lastAccessed: "3 hours ago",
      rating: 4.6,
      students: 1100
    },
  ];

  const mockStats = {
    totalCourses: 4,
    completedCourses: 1,
    inProgress: 2,
    totalHours: 24,
    streak: 7,
    certificates: 3
  };

  // Simulate API loading with error handling
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate potential network error (5% chance)
        if (Math.random() < 0.05) {
          throw new Error("Network error occurred");
        }
        
        setCourses(mockCourses);
        setStats(mockStats);
      } catch (err) {
        setError(err.message || "Failed to load dashboard data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Memoized calculations for performance
  const dashboardAnalytics = useMemo(() => {
    if (!courses.length) return {};
    
    const totalProgress = courses.reduce((sum, course) => sum + course.progress, 0);
    const averageProgress = Math.round(totalProgress / courses.length);
    const activeCoursesCount = courses.filter(course => course.status === "In Progress").length;
    
    return {
      averageProgress,
      activeCoursesCount,
      completionRate: Math.round((courses.filter(c => c.progress === 100).length / courses.length) * 100)
    };
  }, [courses]);

  // Filtered courses based on active filter and search
  const filteredCourses = useMemo(() => {
    let filtered = courses;
    
    // Apply status filter
    if (activeFilter !== "All") {
      filtered = filtered.filter(course => {
        switch (activeFilter) {
          case "In Progress":
            return course.status === "In Progress" || course.status === "Almost Complete";
          case "Completed":
            return course.progress === 100;
          case "Not Started":
            return course.status === "Not Started";
          default:
            return true;
        }
      });
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.difficulty.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [courses, activeFilter, searchQuery]);

  // Error handler with retry functionality
  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    // Trigger data reload
    setTimeout(() => {
      setCourses(mockCourses);
      setStats(mockStats);
      setIsLoading(false);
    }, 1000);
  };

  // Course action handlers
  const handleContinueCourse = (courseId) => {
    console.log(`Continue course ${courseId}`);
    // Here you would navigate to the course page
  };

  const handleViewDetails = (courseId) => {
    console.log(`View details for course ${courseId}`);
    // Here you would open course details modal or navigate to details page
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.main}>
          <div className={styles.loadingContainer}>
            <LoadingSpinner />
            <p>Loading your dashboard...</p>
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
              <button onClick={handleRetry} className={styles.retryButton}>
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
          <Header 
            username={user.name} 
            avatarUrl={user.avatar}
            onAvatarClick={() => console.log('Profile clicked')}
          />

          {/* Quick Stats Overview */}
          <div className={styles.statsSection}>
            <StatsCard 
              title="Total Courses" 
              value={stats.totalCourses} 
              icon="📚"
              trend="+2 this month"
            />
            <StatsCard 
              title="Average Progress" 
              value={`${dashboardAnalytics.averageProgress}%`} 
              icon="📈"
              trend="+15% this week"
            />
            <StatsCard 
              title="Learning Streak" 
              value={`${stats.streak} days`} 
              icon="🔥"
              trend="Keep it up!"
            />
            <StatsCard 
              title="Certificates" 
              value={stats.certificates} 
              icon="🏆"
              trend="Great job!"
            />
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* My Courses Section */}
          <div className={styles.coursesSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>My Courses</h2>
              <div className={styles.courseFilters}>
                <button 
                  className={`${styles.filterBtn} ${activeFilter === "All" ? styles.active : ""}`}
                  onClick={() => setActiveFilter("All")}
                >
                  All
                </button>
                <button 
                  className={`${styles.filterBtn} ${activeFilter === "In Progress" ? styles.active : ""}`}
                  onClick={() => setActiveFilter("In Progress")}
                >
                  In Progress
                </button>
                <button 
                  className={`${styles.filterBtn} ${activeFilter === "Completed" ? styles.active : ""}`}
                  onClick={() => setActiveFilter("Completed")}
                >
                  Completed
                </button>
                <button 
                  className={`${styles.filterBtn} ${activeFilter === "Not Started" ? styles.active : ""}`}
                  onClick={() => setActiveFilter("Not Started")}
                >
                  Not Started
                </button>
              </div>
            </div>
            
            <div className={styles.courseGrid}>
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  {...course}
                  onContinue={() => handleContinueCourse(course.id)}
                  onViewDetails={() => handleViewDetails(course.id)}
                />
              ))}
            </div>
          </div>

          {/* Analytics Section */}
          <div className={styles.analyticsSection}>
            <h2 className={styles.sectionTitle}>Learning Analytics</h2>
            <div className={styles.chartsContainer}>
              <div className={styles.chartBox}>
                <h3>Activity Overview</h3>
                <ActivityChart />
              </div>
              <div className={styles.chartBox}>
                <h3>Weekly Progress</h3>
                <WeeklyStatusChart />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={styles.recentActivity}>
            <h2 className={styles.sectionTitle}>Recent Activity</h2>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <span className={styles.activityIcon}>✅</span>
                <div className={styles.activityText}>
                  <p>Completed "CSS Flexbox" lesson</p>
                  <small>2 hours ago</small>
                </div>
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityIcon}>📖</span>
                <div className={styles.activityText}>
                  <p>Started "JavaScript Variables" chapter</p>
                  <small>1 day ago</small>
                </div>
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityIcon}>🏆</span>
                <div className={styles.activityText}>
                  <p>Earned "HTML Expert" badge</p>
                  <small>3 days ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
