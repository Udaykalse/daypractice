import React, { useState, useEffect } from "react";
import NavDock from "./components/nav/NavDock";
import StudentList from "./components/list/StudentList";
import Dashboard from "./components/dashboard/Dashboard";
import ScheduleWidget from "./components/scheduleWidget/ScheduleWidget";
import "./styles/global.css";

const App = () => {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="layout-container">
      <NavDock activeNav={activeNav} setActiveNav={setActiveNav} />
      <StudentList
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
      />
      <Dashboard />
      <ScheduleWidget />
    </div>
  );
};

export default App;
