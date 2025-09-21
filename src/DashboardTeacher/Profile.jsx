import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaEdit, 
  FaSave, 
  FaTimes, 
  FaCamera, 
  FaPlus, 
  FaMinus,
  FaEye,
  FaEyeSlash,
  FaCheck,
  FaGraduationCap,
  FaBriefcase,
  FaCalendar,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe
} from "react-icons/fa";
import styles from "./Profile.module.css";

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const fileInputRef = useRef(null);
  const headerImageInputRef = useRef(null);
  const [headerImage, setHeaderImage] = useState("/Home3.jpg"); // Default header image
  
  const [formData, setFormData] = useState({
    firstName: user?.fullName?.split(' ')[0] || "John",
    lastName: user?.fullName?.split(' ')[1] || "Doe", 
    email: user?.email || "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    company: "Bhoomi TechZone",
    department: "Software Development",
    position: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience in creating innovative web applications.",
    joinDate: "January 2023",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [skills, setSkills] = useState([
    { id: 1, name: "React.js", level: 85 },
    { id: 2, name: "JavaScript", level: 90 },
    { id: 3, name: "Node.js", level: 75 },
    { id: 4, name: "Python", level: 70 },
    { id: 5, name: "UI/UX Design", level: 60 }
  ]);

  const [newSkill, setNewSkill] = useState({ name: "", level: 50 });
  const [achievements] = useState([
    { id: 1, title: "Course Completion", description: "Completed 15 online courses", date: "2024" },
    { id: 2, title: "Project Leader", description: "Led 3 successful projects", date: "2024" },
    { id: 3, title: "Certification", description: "AWS Cloud Practitioner", date: "2023" }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillChange = (id, field, value) => {
    setSkills(prev => prev.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const addSkill = () => {
    if (newSkill.name.trim()) {
      setSkills(prev => [...prev, {
        id: Date.now(),
        name: newSkill.name,
        level: newSkill.level
      }]);
      setNewSkill({ name: "", level: 50 });
    }
  };

  const removeSkill = (id) => {
    setSkills(prev => prev.filter(skill => skill.id !== id));
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Here you would typically upload the file to your server
      console.log("Profile picture file selected:", file);
      // You can add code here to preview the image or upload it
    }
  };

  const handleHeaderImageClick = () => {
    headerImageInputRef.current?.click();
  };

  const handleHeaderImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local URL for preview
      const imageUrl = URL.createObjectURL(file);
      setHeaderImage(imageUrl);
      console.log("Header image file selected:", file);
      // Here you would typically upload the file to your server
    }
  };

  const handleSave = () => {
    // Here you would save the data to your backend
    console.log("Saving profile data:", formData);
    setIsEditing(false);
  };

  const getSkillLevel = (level) => {
    if (level >= 80) return "Expert";
    if (level >= 60) return "Advanced";
    if (level >= 40) return "Intermediate";
    return "Beginner";
  };
  return (
    <div className={styles.container}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <div className={styles.headerBackground}>
          <img 
            src={headerImage} 
            alt="Profile Header Background" 
            className={styles.headerImage}
            onClick={isEditing ? handleHeaderImageClick : undefined}
            style={{ cursor: isEditing ? 'pointer' : 'default' }}
          />
          {isEditing && (
            <div className={styles.headerImageOverlay} onClick={handleHeaderImageClick}>
              <FaCamera className={styles.headerCameraIcon} />
              <span>Change Cover Photo</span>
            </div>
          )}
          <input
            type="file"
            ref={headerImageInputRef}
            onChange={handleHeaderImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <div className={styles.headerOverlay}></div>
        </div>
        
        <div className={styles.profileInfo}>
          <div className={styles.avatarContainer}>
            <img 
              src="/ProfilePic.webp" 
              alt="Profile" 
              className={styles.avatar}
            />
            <div className={styles.avatarOverlay} onClick={handleAvatarClick}>
              <FaCamera />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          
          <div className={styles.userDetails}>
            <h1>{formData.firstName} {formData.lastName}</h1>
            <p className={styles.position}>{formData.position}</p>
            <p className={styles.company}><FaBuilding /> {formData.company}</p>
            <p className={styles.location}><FaMapMarkerAlt /> {formData.location}</p>
          </div>
          
          <div className={styles.profileActions}>
            <button 
              className={`${styles.actionBtn} ${isEditing ? styles.cancel : styles.edit}`}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <><FaTimes /> Cancel</> : <><FaEdit /> Edit Profile</>}
            </button>
            {isEditing && (
              <button className={`${styles.actionBtn} ${styles.save}`} onClick={handleSave}>
                <FaSave /> Save Changes
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'personal' ? styles.active : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          <FaUser /> Personal Info
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'skills' ? styles.active : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          <FaGraduationCap /> Skills
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'achievements' ? styles.active : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          <FaBriefcase /> Achievements
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Personal Information Tab */}
        {activeTab === 'personal' && (
          <div className={styles.personalTab}>
            <div className={styles.section}>
              <h3><FaUser /> Basic Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label><FaUser /> First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><FaUser /> Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><FaEnvelope /> Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><FaPhone /> Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><FaMapMarkerAlt /> Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><FaBuilding /> Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3><FaBriefcase /> Professional Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label><FaCalendar /> Join Date</label>
                  <input
                    type="text"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={isEditing ? styles.editing : ''}
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className={isEditing ? styles.editing : ''}
                  rows="4"
                />
              </div>
            </div>

            {isEditing && (
              <div className={styles.section}>
                <h3>🔐 Security Settings</h3>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label>Current Password</label>
                    <div className={styles.passwordInput}>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={styles.passwordToggle}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label>New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className={styles.skillsTab}>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3><FaGraduationCap /> My Skills</h3>
                {isEditing && (
                  <div className={styles.addSkillContainer}>
                    <input
                      type="text"
                      placeholder="Skill name"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                      className={styles.skillInput}
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={newSkill.level}
                      onChange={(e) => setNewSkill({...newSkill, level: parseInt(e.target.value)})}
                      className={styles.skillRange}
                    />
                    <span>{newSkill.level}%</span>
                    <button onClick={addSkill} className={styles.addBtn}>
                      <FaPlus />
                    </button>
                  </div>
                )}
              </div>
              
              <div className={styles.skillsList}>
                {skills.map(skill => (
                  <div key={skill.id} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <div className={styles.skillActions}>
                          <span className={styles.skillLevel}>{getSkillLevel(skill.level)}</span>
                          <span className={styles.skillPercentage}>{skill.level}%</span>
                          {isEditing && (
                            <button
                              onClick={() => removeSkill(skill.id)}
                              className={styles.removeBtn}
                            >
                              <FaMinus />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className={styles.progressContainer}>
                        <div 
                          className={styles.progressBar}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      {isEditing && (
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => handleSkillChange(skill.id, 'level', parseInt(e.target.value))}
                          className={styles.skillSlider}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className={styles.achievementsTab}>
            <div className={styles.section}>
              <h3><FaBriefcase /> Achievements & Certifications</h3>
              <div className={styles.achievementsList}>
                {achievements.map(achievement => (
                  <div key={achievement.id} className={styles.achievementCard}>
                    <div className={styles.achievementIcon}>
                      <FaCheck />
                    </div>
                    <div className={styles.achievementContent}>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      <span className={styles.achievementDate}>{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
