import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet, // Add Outlet for nested routes
} from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Footer from "./StateCard/Footer";
import Card from "./Card/Card";
import Home3 from "./StateCard/Home3";
import Home2 from "./StateCard/Home2";
import Home4 from "./StateCard/Home4";
import Home5 from "./StateCard/Home5";
import Home6 from "./StateCard/Home6";
import Home7 from "./StateCard/Home7";
import Home8 from "./StateCard/Home8";
import Block from "./Block/Block";
import Practice from "./Practice/Practice";

// Course Pages
import CourseName from "./Course/CourseName"; // All courses grid
import Courses from "./Course/Courses"; // Single course detail
import CourseAll from "./Course/CourseAll"; // Grid with clickable cards

// About Pages
import About from "./About/About";
import AboutOverview from "./About/AboutOverview";
import OurTeam from "./About/OurTeam1";
import Mission from "./About/Mission";
import Vision from "./About/Vision";
import Contact from "./About/Contact";

// Dashboard and Payment
import Dashboard from "./Dashboard/Dashboard";
import Notification from "./Dashboard/Notification";
import Payment from "./Payment/Payment";
import TeacherDashboard from "./DashboardTeacher/TeacherDashboardEnhanced";
import TeacherLogin from "./TeacherLogin/TeacherLogin"
import OurTeam1 from "./About1/OurTeam1";
import Profile from './DashboardTeacher/Profile';
import AdminPannel from './AdminPannel/AdminPannel';
// ----------------------
// Layout Components
// ----------------------
function MainLayout({ children }) {
  const location = useLocation();

  // Hide Navbar on dashboard routes
  const hideNavbar = location.pathname.startsWith("/dashboard");
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}  // <-- Added missing closing brace

function AuthLayout({ children }) {
  return <>{children}</>; 
}  // <-- Added missing closing brace

// Wrapper for CourseAll to handle course selection and navigation
function CourseAllWrapper() {
  const navigate = useNavigate();

  const handleSelectCourse = (courseKey) => {
    navigate(`/courses/${courseKey}`);
  };

  return <CourseAll onSelectCourse={handleSelectCourse} />;
}

// ----------------------
// App Component
// ----------------------
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
              <Home2 />
              <OurTeam1/>
              <Home3 />
              <Card />
              <Home4 />
              <Home5 />
              
              {/* <Home6 /> */}
              {/* <Home8 /> */}
              {/* <Home7 /> */}
              {/* <Profile/> */}
            </MainLayout>
          }
        />

        <Route 
          path="/profile" 
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          } 
        />
        <Route
          path="/courses"
          element={
            <MainLayout>
              <CourseName />
            </MainLayout>
          }
        />
        <Route
          path="/courses/:courseId"
          element={
            <MainLayout>
              <Courses />
            </MainLayout>
          }
        />
        <Route
          path="/coursesall"
          element={
            <MainLayout>
              <CourseAllWrapper />
            </MainLayout>
          }
        />

        {/* Payment Page (No Navbar/Footer) */}
        <Route
          path="/payment"
          element={
            <AuthLayout>
              <Payment />
            </AuthLayout>
          }
        />
           <Route
        path="/teacherlogin"
        element={
          <AuthLayout>
            <TeacherLogin />
          </AuthLayout>
        }
      />

        {/* Block & Practice Pages */}
        <Route
          path="/block"
          element={
            <MainLayout>
              <Block />
            </MainLayout>
          }
        />
        <Route
          path="/practice/*"
          element={
            <MainLayout>
              <Practice />
            </MainLayout>
          }
        />

        {/* About Pages (Nested Routing) */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <Outlet /> {/* Outlet renders nested routes */}
            </MainLayout>
          }
        >
          <Route index element={<AboutOverview />} />
          <Route path="overview" element={<AboutOverview />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="mission" element={<Mission />} />
          <Route path="vision" element={<Vision />}/>
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={
            <AuthLayout>
              <AdminPannel />
            </AuthLayout>
          }
        />

        {/* Notifications route - Both /notifications and /dashboard/notifications */}
        <Route
          path="/notifications"
          element={
            <MainLayout>
              <Notification />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard/notifications"
          element={
            <MainLayout>
              <Notification />
            </MainLayout>
          }
        />
       <Route
  path="/teacherdashboard"
  element={
    <AuthLayout>
      <TeacherDashboard />
    </AuthLayout>
  }
/>

       <Route
  path="/teacher-dashboard"
  element={
    <AuthLayout>
      <TeacherDashboard />
    </AuthLayout>
  }
/>

       <Route
  path="/teacher-profile"
  element={
    <AuthLayout>
      <Profile />
    </AuthLayout>
  }
/>

       <Route
  path="/teacher-settings"
  element={
    <AuthLayout>
      <Profile />
    </AuthLayout>
  }
/>
      <Route
  path="/ourteam1"
  element={
    <AuthLayout>
      <OurTeam1 />
    </AuthLayout>
  }
/>


        {/* Auth Pages (No Navbar/Footer) */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
