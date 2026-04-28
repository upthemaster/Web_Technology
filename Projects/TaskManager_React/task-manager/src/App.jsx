import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  };

  // Edit task
  const editTask = (id, newTask) => {
    const updated = tasks.map((task, index) =>
      index === id ? newTask : task
    );
    setTasks(updated);
  };

  return (
  <div className="app-container">
    <div className="wrapper">
      <h1 className="title">Task Manager</h1>

      <div className="task-box">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  </div>
);
}

export default App;