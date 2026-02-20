import React from 'react';
import './StudentList.css';

const StudentList = ({ selectedStudent, setSelectedStudent }) => {
  const students = [
    { name: 'Elena Fisher', grade: 'Grade 12', subject: 'Science' },
    { name: 'Marcus Chen', grade: 'Grade 11', subject: 'Arts' },
    { name: 'Sarah Miller', grade: 'Grade 12', subject: 'Math' },
    { name: 'James Wilson', grade: 'Grade 10', subject: 'History' },
    { name: 'Priya Patel', grade: 'Grade 11', subject: 'Bio' },
    { name: 'Tom Hardy', grade: 'Grade 12', subject: 'Physics' }
  ];

  return (
    <aside className="student-list-panel">
      <svg className="pattern-squiggle" width="100" height="50" viewBox="0 0 100 50">
        <path d="M0 25 Q 12.5 0, 25 25 T 50 25 T 75 25 T 100 25" fill="none" stroke="#1a1a1a" strokeWidth="0.5"></path>
        <path d="M0 35 Q 12.5 10, 25 35 T 50 35 T 75 35 T 100 35" fill="none" stroke="#1a1a1a" strokeWidth="0.5"></path>
      </svg>

      <div className="panel-header">
        <div className="panel-subtitle">Directory</div>
        <h2 className="panel-title">Students</h2>
      </div>

      <div className="student-list">
        {students.map((student, index) => (
          <div 
            key={index}
            className="student-item"
            onClick={() => setSelectedStudent(student)}
          >
            <div className="student-name">{student.name}</div>
            <div className="student-meta">
              <span>{student.grade}</span>
              <span>{student.subject}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default StudentList;