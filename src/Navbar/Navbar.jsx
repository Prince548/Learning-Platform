import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Navbar.css";
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaChevronDown, FaTachometerAlt, FaUserCircle, FaUserShield } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
    setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src='logo2.png' alt="Bhoomi Logo" style={{height:'300px'}}/>
        {/* <span className="logo-text">BHOOMI</span>  <-- Removed text */}
      </div>

      {/* Desktop Menu */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/Courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
         <li><Link to="/Practice" onClick={() => setIsOpen(false)}>Practice</Link></li>
        <li><Link to="/Block" onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
      </ul>
      {/* All of  the name and different entire */}
      {/* Buttons */}
      <div className="navbar-actions">
        {isAuthenticated ? (
          // Show user dropdown when user is logged in
          <div className="user-dropdown" ref={dropdownRef}>
            <button 
              className="user-dropdown-toggle" 
              onClick={toggleUserDropdown}
            >
              <div className="user-info">
                <FaUser className="user-icon" />
                <span className="user-name">{user?.fullName || 'Student User'}</span>
              </div>
              <FaChevronDown className={`dropdown-arrow ${isUserDropdownOpen ? 'open' : ''}`} />
            </button>
            
            {isUserDropdownOpen && (
              <div className="user-dropdown-menu">
                <Link 
                  to="/profile" 
                  className="dropdown-item profile-item"
                  onClick={() => setIsUserDropdownOpen(false)}
                >
                  <FaUserCircle className="dropdown-icon" />
                  Profile
                </Link>
                <Link 
                  to="/dashboard" 
                  className="dropdown-item"
                  onClick={() => setIsUserDropdownOpen(false)}
                >
                  <FaTachometerAlt className="dropdown-icon" />
                  Dashboard
                </Link>
                <Link 
                  to="/admin" 
                  className="dropdown-item admin-item"
                  onClick={() => setIsUserDropdownOpen(false)}
                >
                  <FaUserShield className="dropdown-icon" />
                  Admin Panel
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="dropdown-item logout-item"
                >
                  <FaSignOutAlt className="dropdown-icon" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Show login and signup when user is not logged in
          <>
            <Link to="/Login" className="navbar-btn login">Login</Link>
            <Link to="/Signup" className="navbar-btn signup">Sign Up</Link>
          </>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
