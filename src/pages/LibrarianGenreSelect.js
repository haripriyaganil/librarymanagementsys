import { useNavigate } from "react-router-dom";
import "./styles/Dashboard.css";

function LibrarianGenreSelect() {
  const navigate = useNavigate();

  const genres = [
    "Fantasy",
    "Literature",
    "Fiction",
    "Business",
    "SelfHelp",
    "Technology",
    "History",
    "Biography",
    "Philosophy",
    "Psychology",
    "Science",
    "Romance",
    "Mystery",
    "Horror",
    "Motivation",
    "Finance"
  ];

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Select Your Genre</h1>

      <div className="dashboard-center">
        {genres.map((g) => (
          <div
            key={g}
            className="dash-card"
            onClick={() =>
              navigate("/librarian-dashboard", { state: { genre: g } })
            }
          >
            📚 {g}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibrarianGenreSelect;
