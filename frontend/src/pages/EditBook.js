import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/axios";
import genres from "../data/genres";
import "./styles/AddBook.css";

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const role = localStorage.getItem("role");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [about, setAbout] = useState("");
  const [authorInfo, setAuthorInfo] = useState("");
  const [genre, setGenre] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔐 Security check
  useEffect(() => {
    if (role !== "Librarian") {
      navigate("/login", { replace: true });
    }
  }, [role, navigate]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await api.get(`/books/${id}`);
        setTitle(res.data.title || "");
        setAuthor(res.data.author || "");
        setCover(res.data.cover || "");
        setAbout(res.data.about || "");
        setAuthorInfo(res.data.authorInfo || "");

        // Ignore 'Uncategorized' as it's not a valid dropdown option
        let initialGenre = res.data.genre;
        if (!initialGenre || initialGenre === "Uncategorized") {
          initialGenre = res.data.category;
        }
        if (!initialGenre || initialGenre === "Uncategorized") {
          initialGenre = "";
        }
        setGenre(initialGenre);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching book details:", err);
        setMessage("Error loading book details.");
        setLoading(false);
      }
    };
    if (id) {
       fetchBookDetails();
    }
  }, [id]);

  const handleEditBook = async () => {
    try {
      if (!title || !author || !cover || !about || !authorInfo || !genre) {
        return setMessage("Please fill all fields");
      }

      await api.put(`/books/${id}`, {
        title,
        author,
        cover,
        about,
        authorInfo,
        genre,
        category: genre
      });

      setMessage("Book updated successfully!");
      
      setTimeout(() => {
        let normalizedCategory = genre ? genre.trim() : "";
        if (normalizedCategory) {
          normalizedCategory = normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1).toLowerCase();
        }
        navigate("/librarian-books", { state: { category: normalizedCategory } });
      }, 1500)

    } catch (err) {
      setMessage(err.response?.data?.message || "Error updating book");
    }
  };

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading book details...</p>;
  }

  return (
  <div className="addbook-wrapper">

  <div className="addbook-card">

    <h2 className="addbook-heading">
      Edit Book
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

    <button className="addbook-btn" onClick={handleEditBook}>
      ✨ Update Book
    </button>

    {message && <p className="success">{message}</p>}

  </div>
</div>
  );
}

export default EditBook;
