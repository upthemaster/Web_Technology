import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          id={index}
          serial={index + 1}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;