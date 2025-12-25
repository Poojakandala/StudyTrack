import React, { useState } from "react";
import TaskManager from "./components/TaskManager";
import ProgressChart from "./components/ProgressChart";
import StudyAlarm from "./components/StudyAlarm";
import "./App.css";

function App() {
  const [progress, setProgress] = useState([]);

  const handleComplete = () => {
    const today = new Date().toLocaleDateString();
    setProgress([...progress, { day: today, count: 1 }]);
  };

  return (
    <div className="app">
      <h1>Daily Study Tracker</h1>

      <StudyAlarm />
      <TaskManager onComplete={handleComplete} />
      <ProgressChart data={progress} />
    </div>
  );
}

export default App;
