import { useState } from "react";
import "./styles/AdminManageLibrarians.css";

function AdminManageLibrarians() {
  const [librarians, setLibrarians] = useState([
    { name: "Alice" },
    { name: "Bob" },
    { name: "Clara" },
  ]);


  const removeLibrarian = (index) => {
    const updated = librarians.filter((_, i) => i !== index);
    setLibrarians(updated);
  };

  return (
    <div className="admin-librarians-page">
      <h1 className="admin-title">Manage Librarians</h1>

      <div className="librarian-list">
        {librarians.map((lib, index) => (
          <div className="librarian-card" key={index}>
            <div className="lib-info">
              <h3>{lib.name}</h3>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeLibrarian(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminManageLibrarians;
