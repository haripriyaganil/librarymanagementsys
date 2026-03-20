import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/axios";
import genres from "../data/genres";
import "./styles/AddBook.css";

function AddBook() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [genre, setGenre] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [about, setAbout] = useState("");
  const [authorInfo, setAuthorInfo] = useState("");
  const [message, setMessage] = useState("");

  // 🔐 Security check
  useEffect(() => {
    if (role !== "Librarian") {
      navigate("/login", { replace: true });
    }
  }, [role, navigate]);

  const handleAddBook = async () => {
    try {
      if (!title || !author || !cover || !about || !authorInfo || !genre) {
        return setMessage("Please fill all fields");
      }

      await api.post("/books/add", {
  title,
  author,
  cover,
  about,
  authorInfo,
  category: genre,
  genre: genre
});

      setMessage("Book added successfully!");

      // Clear fields
      setTitle("");
      setAuthor("");
      setCover(""); 
      setAbout("");
      setAuthorInfo("");

    } catch (err) {
      setMessage(err.response?.data?.message || "Error adding book");
    }
  };

  return (
  <div className="addbook-wrapper">



  <div className="addbook-card">

    <h2 className="addbook-heading">
      Add New Book
    </h2>

    <input
      type="text"
      placeholder="Book Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <input
      type="text"
      placeholder="Author"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />

    <input
  type="text"
  placeholder="Cover Image URL"
  value={cover}
  onChange={(e) => setCover(e.target.value)}
/>
    <textarea
      placeholder="About the Book"
      value={about}
      onChange={(e) => setAbout(e.target.value)}
    />

    <textarea
      placeholder="About the Author"
      value={authorInfo}
      onChange={(e) => setAuthorInfo(e.target.value)}
    />

    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className="genre-input"
    >
      <option value="">Select Genre</option>
      {genres.map((g) => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>

    <button className="addbook-btn" onClick={handleAddBook}>
      ✨ Add Book
    </button>

    {message && <p className="success">{message}</p>}

  </div>
</div>
  );
}

export default AddBook;