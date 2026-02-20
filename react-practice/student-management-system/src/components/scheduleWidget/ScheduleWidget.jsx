import React from 'react';
import './ScheduleWidget.css';

const ScheduleWidget = () => {
  return (
    <aside className="widget-column">
      <div className="card-glass">
        <div className="glass-header">
          <h3 className="glass-title">Schedule</h3>
          <div className="schedule-dot"></div>
        </div>

        <div className="schedule-list">
          <div className="schedule-item">
            <div className="time">08:30</div>
            <div className="class-info">
              <div className="class-name">Advanced Physics</div>
              <div className="class-room">Room 304 • Lab A</div>
            </div>
          </div>
          
          <div className="schedule-item">
            <div className="time">10:15</div>
            <div className="class-info">
              <div className="class-name">World History</div>
              <div className="class-room">Room 102 • Hall B</div>
            </div>
          </div>
          
          <div className="schedule-item">
            <div className="time">12:00</div>
            <div className="class-info lunch">
              <div className="class-name">Lunch Break</div>
              <div className="class-room">Cafeteria</div>
            </div>
          </div>

          <div className="schedule-item">
            <div className="time">13:00</div>
            <div className="class-info">
              <div className="class-name">Linear Algebra</div>
              <div className="class-room">Room 201 • Hall A</div>
            </div>
          </div>
        </div>
        
        <div className="next-event">
          <h4 className="next-event-title">Next Event</h4>
          <div className="event-card">
            <div className="event-badge">Tomorrow</div>
            <div className="event-name">Science Fair</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ScheduleWidget;