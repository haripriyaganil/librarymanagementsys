import { useState, useEffect } from "react";
import "./styles/AdminGenres.css";

function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState("");

  // Load genres
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("genres"));
    if (stored && stored.length > 0) {
      setGenres(stored);
    } else {
      const defaultGenres = [
        "Fantasy",
        "Literature",
        "Business",
        "Technology",
        "Science",
        "History",
        "Philosophy",
        "Self Help",
        "Psychology",
      ];
      setGenres(defaultGenres);
      localStorage.setItem("genres", JSON.stringify(defaultGenres));
    }
  }, []);

  // Save genres
  useEffect(() => {
    localStorage.setItem("genres", JSON.stringify(genres));
  }, [genres]);

  const addGenre = () => {
    if (!newGenre.trim()) return;
    if (genres.includes(newGenre)) return;

    setGenres([...genres, newGenre]);
    setNewGenre("");
  };

  const removeGenre = (genre) => {
    setGenres(genres.filter((g) => g !== genre));
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Manage Genres</h1>

      <div className="add-genre">
        <input
          type="text"
          placeholder="New genre name"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <button onClick={addGenre}>Add Genre</button>
      </div>

      <div className="genre-list">
        {genres.map((genre, index) => (
          <div className="genre-card" key={index}>
            <span>{genre}</span>
            <button onClick={() => removeGenre(genre)}>✖</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminGenres;
