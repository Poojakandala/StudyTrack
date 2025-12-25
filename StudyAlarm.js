import React, { useState } from "react";

function StudyAlarm() {
  const [time, setTime] = useState("");

  const setAlarm = () => {
    setInterval(() => {
      const now = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });

      if (now === time) {
        alert("📚 Study Time! Focus now.");
      }
    }, 1000);
  };

  return (
    <div className="card">
      <h2>⏰ Study Alarm</h2>
      <input type="time" onChange={(e) => setTime(e.target.value)} />
      <button onClick={setAlarm}>Set Alarm</button>
    </div>
  );
}

export default StudyAlarm;
