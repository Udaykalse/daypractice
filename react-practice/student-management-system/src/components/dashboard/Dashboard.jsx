import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className="dashboard-main">
      <header className="dashboard-header">
        <div>
          <div className="header-subtitle">Dashboard</div>
          <h1 className="page-title">Overview</h1>
        </div>
        <div className="header-actions">
          <button className="btn-pill">October 2023</button>
          <button className="btn-pill">Export</button>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="decor-orbit"></div>
          <div className="stat-content">
            <div className="stat-label">Daily Attendance</div>
            <div className="stat-value serif">94%</div>
            <div className="stat-trend">+2.4% from yesterday</div>
          </div>
          
          <div className="stat-graph">
            <div className="bar" style={{ height: '40%' }}></div>
            <div className="bar" style={{ height: '60%' }}></div>
            <div className="bar" style={{ height: '50%' }}></div>
            <div className="bar" style={{ height: '70%' }}></div>
            <div className="bar" style={{ height: '85%' }}></div>
            <div className="bar active" style={{ height: '94%' }}></div>
          </div>
        </div>

        <div className="stat-card light">
          <svg className="doodle-star" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="#1a1a1a" strokeWidth="1"></polygon>
          </svg>

          <div className="stat-content">
            <div className="stat-label">Average GPA</div>
            <div className="stat-value">3.8</div>
          </div>

          <div className="gpa-breakdown">
            <div className="gpa-item">
              <span className="gpa-subject">Science</span>
              <span className="gpa-score">3.9</span>
            </div>
            <div className="gpa-item">
              <span className="gpa-subject">Math</span>
              <span className="gpa-score">3.7</span>
            </div>
            <div className="gpa-item">
              <span className="gpa-subject">Arts</span>
              <span className="gpa-score">4.0</span>
            </div>
          </div>
        </div>

        <div className="stat-card enrollment">
          <div className="enrollment-content">
            <div>
              <div className="stat-label">Total Enrollment</div>
              <div className="stat-value serif">1,240</div>
            </div>
            <div className="enrollment-breakdown">
              <div className="enrollment-item">
                <div className="enrollment-label">Male</div>
                <div className="enrollment-number">580</div>
              </div>
              <div className="enrollment-item">
                <div className="enrollment-label">Female</div>
                <div className="enrollment-number">660</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;