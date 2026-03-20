import "./styles/AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Control Panel</h1>

      <div className="admin-cards">  
        <div
          className="admin-card"
          onClick={() => navigate("/admin/students")}
        >
          <i className="bi bi-people"></i> Manage Students
        </div>

        <div
          className="admin-card"
          onClick={() => navigate("/admin/librarians")}
        >
          <i className="bi bi-person-workspace"></i> Manage Librarians
        </div>

        <div
          className="admin-card"
         onClick={() => navigate("/admin/reports")}
        >
          <i className="bi bi-clipboard-data"></i> View Reports
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
