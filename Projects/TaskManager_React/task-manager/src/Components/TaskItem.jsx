import { useState } from "react";

function TaskItem({ task, id, serial, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleEdit = () => {
    if (!newTask.trim()) return;
    editTask(id, newTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTask(task);   // reset to original
    setIsEditing(false);
  };

  return (
    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      
      {isEditing ? (
        <div style={{ display: "flex", gap: "6px", width: "100%" }}>
          <input
            style={{ flex: 1 }}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="edit-btn" onClick={handleEdit}>
            Save
          </button>
          <button onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span>{serial}. {task}</span>

          <div style={{ display: "flex", gap: "6px" }}>
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;