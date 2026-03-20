import { useEffect, useState } from "react";
import api from "../api/axios";
import "./styles/AdminStudents.css";

function AdminStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  
const fetchStudents = async () => {
  try {
    const res = await api.get("/admin/students");
    console.log("STUDENTS FROM BACKEND:", res.data);
    setStudents(res.data);
  } catch (err) {
    console.log(err);
  }
};
const handleDelete = async (id) => {
  try {
    await api.delete(`/admin/students/${id}`);

    setStudents(prev =>
      prev.filter(student => student._id !== id)
    );

  } catch (err) {
    console.log("Delete failed");
  }
};
  return (
    <div className="admin-page">
      <h1 className="admin-title">Manage Students</h1>

      <div className="admin-card">
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((student) => (
            <div key={student._id} className="student-row">
              <div>
                <strong>{student.name || "No Name"}</strong>
                <p>{student.email}</p>
              </div>
<button 
  className="delete-btn"
  onClick={() => handleDelete(student._id)}
>
  🗑 Delete
</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminStudents;