import { useEffect, useState } from "react";
import api from "../api/axios";
import "./styles/AdminManageLibrarians.css";

function AdminLibrarians() {
  const [librarians, setLibrarians] = useState([]);

  useEffect(() => {
    fetchLibrarians();
  }, []);

  const fetchLibrarians = async () => {
    try {
      const res = await api.get("/admin/librarians");
      setLibrarians(res.data);
    } catch (err) {
      console.log("Error fetching librarians");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/librarians/${id}`);
      setLibrarians(prev =>
        prev.filter(lib => lib._id !== id)
      );
    } catch (err) {
      console.log("Delete failed");
    }
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Manage Librarians</h1>

      <div className="admin-container">
        {librarians.map(lib => (
          <div key={lib._id} className="admin-card">
            <div>
              <h3>{lib.name}</h3>
              <p>{lib.email}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(lib._id)}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminLibrarians;