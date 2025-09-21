import React, { useState } from 'react';
import styles from './Students.module.css';
import { FaSearch, FaFilter, FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const studentsData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      enrolledCourses: 3,
      progress: 85,
      status: 'active',
      joinDate: '2024-01-15',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      enrolledCourses: 2,
      progress: 92,
      status: 'active',
      joinDate: '2024-02-10',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      enrolledCourses: 1,
      progress: 45,
      status: 'inactive',
      joinDate: '2024-03-05',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      enrolledCourses: 4,
      progress: 78,
      status: 'active',
      joinDate: '2024-01-28',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@email.com',
      enrolledCourses: 2,
      progress: 100,
      status: 'completed',
      joinDate: '2023-12-12',
      avatar: '/placeholder-avatar.jpg'
    }
  ];

  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleDeleteStudent = (studentId) => {
    console.log('Delete student:', studentId);
  };

  const handleEditStudent = (studentId) => {
    console.log('Edit student:', studentId);
  };

  const handleViewStudent = (studentId) => {
    console.log('View student:', studentId);
  };

  return (
    <div className={styles.studentsContainer}>
      <div className={styles.header}>
        <h1>Students Management</h1>
        <button className={styles.addButton}>
          <FaPlus /> Add New Student
        </button>
      </div>

      {/* Filter and Search */}
      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className={styles.filterBox}>
          <FaFilter />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Students Table */}
      <div className={styles.tableContainer}>
        <table className={styles.studentsTable}>
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Enrolled Courses</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>
                  <div className={styles.studentInfo}>
                    <img src={student.avatar} alt={student.name} className={styles.avatar} />
                    <span>{student.name}</span>
                  </div>
                </td>
                <td>{student.email}</td>
                <td>{student.enrolledCourses}</td>
                <td>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill} 
                      style={{width: `${student.progress}%`}}
                    ></div>
                    <span>{student.progress}%</span>
                  </div>
                </td>
                <td>
                  <span className={`${styles.status} ${styles[student.status]}`}>
                    {student.status}
                  </span>
                </td>
                <td>{student.joinDate}</td>
                <td>
                  <div className={styles.actions}>
                    <button onClick={() => handleViewStudent(student.id)} title="View">
                      <FaEye />
                    </button>
                    <button onClick={() => handleEditStudent(student.id)} title="Edit">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteStudent(student.id)} title="Delete">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className={styles.summaryStats}>
        <div className={styles.statItem}>
          <h3>{studentsData.length}</h3>
          <p>Total Students</p>
        </div>
        <div className={styles.statItem}>
          <h3>{studentsData.filter(s => s.status === 'active').length}</h3>
          <p>Active Students</p>
        </div>
        <div className={styles.statItem}>
          <h3>{studentsData.filter(s => s.status === 'completed').length}</h3>
          <p>Completed Courses</p>
        </div>
      </div>
    </div>
  );
};

export default Students;
