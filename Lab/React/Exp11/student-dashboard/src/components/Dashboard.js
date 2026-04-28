import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="/add">Add Student</Link> |{" "}
      <Link to="/list">View Students</Link>
    </div>
  );
}

export default Dashboard;