import React, { useState } from "react";

function TaskManager({ onComplete }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const completeTask = (index) => {
    const updated = [...tasks];
    updated[index].done = true;
    setTasks(updated);
    onComplete();
  };

  return (
    <div className="card">
      <h2>📋 Today's Tasks</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter study task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t.text}
            {!t.done && (
              <button onClick={() => completeTask(i)}>✔</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
