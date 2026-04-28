import { useState } from "react";

function AddStudent({ addStudent }) {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addStudent(student);
    setStudent({ id: "", name: "", course: "" });
  };

  return (
    <div>
      <h2>Add Student</h2>

      <input name="id" value={student.id} onChange={handleChange} placeholder="ID" /><br />
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" /><br />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" /><br />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddStudent;