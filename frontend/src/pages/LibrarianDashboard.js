import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles/LibrarianDashboard.css";

function LibrarianDashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // 🔐 Security check
  useEffect(() => {
    if (role !== "Librarian") {
      navigate("/login", { replace: true });
    }
  }, [role, navigate]);

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">
        Manage <span className="highlight-genre">All</span> Books
      </h1>

      <div className="dashboard-center">

        {/* VIEW BOOKS */}
        <div
          className="dash-card"
          onClick={() => navigate("/librarian-books")}
        >
          <i class="bi bi-book"></i> View All Books
        </div>

        {/* ADD BOOK */}
        <div
          className="dash-card"
          onClick={() => navigate("/add-book")}
        >
          <i class="bi bi-plus-lg"></i> Add New Book
        </div>

        {/* GENRE SUMMARY */}
        <div
          className="dash-card"
          onClick={() => navigate("/librarian-genre-summary")}
        >
          <i class="bi bi-bar-chart-line"></i> View All Summary
        </div>

      </div>
    </div>
  );
}

export default LibrarianDashboard;