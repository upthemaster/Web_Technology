import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <div>
        <h1>Student Dashboard</h1>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddStudent addStudent={addStudent} />} />
          <Route path="/list" element={<StudentList students={students} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;