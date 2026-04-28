function StudentList({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => deleteStudent(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;