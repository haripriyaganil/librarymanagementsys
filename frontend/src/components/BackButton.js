import { useNavigate, useLocation } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const hiddenPages = [
    "/",                     // Home
    "/login",
    "/register",
    "/student-dashboard",
    "/librarian-dashboard",
    "/admin-dashboard"
  ];

  if (hiddenPages.includes(location.pathname)) {
    return null;
  }

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        margin: "10px",
        padding: "8px 14px",
        background: "#5c3d2e",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      ← Back
    </button>
  );
}

export default BackButton;