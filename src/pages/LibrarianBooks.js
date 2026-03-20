import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axios";
import genres from "../data/genres";
import "./styles/Books.css";

function LibrarianBooks() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(location.state?.category || null);

  useEffect(() => {
    if (role !== "Librarian") return;

    const fetchBooks = async () => {
      try {

        // 🔥 get ALL books
        const res = await api.get(`/books`);

        setBooks(res.data);

      } catch (err) {
        console.log("Error fetching books:", err);
      }

      setLoading(false);
    };

    fetchBooks();

  }, [role]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await api.delete(`/books/${id}`);
        setBooks(books.filter((book) => book._id !== id));
      } catch (err) {
        console.error("Error deleting book:", err);
        alert("Failed to delete book.");
      }
    }
  };

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading books...</p>;
  }

  return (
    <div className="books-page">

      <h1 className="books-title">
        {selectedCategory ? `${selectedCategory} Books` : "Library Categories"}
      </h1>

      {(() => {
        // Normalize categories logic
        const getNormalizedCategory = (book) => {
          let rawCategory = "Uncategorized";
          if (book.genre && book.genre !== "Uncategorized" && book.genre.trim() !== "") {
            rawCategory = book.genre;
          } else if (book.category && book.category !== "Uncategorized" && book.category.trim() !== "") {
            rawCategory = book.category;
          }
          const trimmed = rawCategory.trim();
          // Title Case
          return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
        };

        if (!selectedCategory) {
          // Calculate dynamically which categories actually have books
          const activeCategories = Array.from(new Set(books.map(getNormalizedCategory))).sort();

          if (activeCategories.length === 0) {
            return <p style={{ marginTop: "40px" }}>No books available in the library yet.</p>;
          }

          return (
            <div className="books-grid">
              {activeCategories.map((cat) => (
                <div
                  key={cat}
                  className="category-card"
                  onClick={() => setSelectedCategory(cat)}
                >
                  <h2>{cat}</h2>
                </div>
              ))}
            </div>
          );
        }

        // View for a specific selected category
        const filteredBooks = books.filter((book) => {
          const matchesCategory = getNormalizedCategory(book) === selectedCategory;
          const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                book.author.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;
        });

        return (
          <>
            <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button 
                onClick={() => setSelectedCategory(null)}
                style={{ padding: "10px 20px", background: "none", border: "1px solid #f5e6cf", color: "#f5e6cf", borderRadius: "8px", cursor: "pointer" }}
              >
                ← Back to Categories
              </button>
              <input 
                type="text" 
                placeholder="Search by title or author..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "100%", maxWidth: "400px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", outline: "none", marginLeft: "20px" }}
              />
            </div>

            {filteredBooks.length === 0 ? (
              <p style={{ marginTop: "40px" }}>No books found in this category.</p>
            ) : (
              <div className="books-grid" style={{ marginTop: "40px" }}>
                {filteredBooks.map((book) => (
                  <div key={book._id} className="book-card">
                    <img src={book.cover} alt={book.title} className="book-cover" />
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    
                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                      <button 
                        onClick={() => navigate(`/edit-book/${book._id}`)}
                        style={{ flex: 1, padding: "8px", background: "#4caf50", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(book._id)}
                        style={{ flex: 1, padding: "8px", background: "#f44336", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        );
      })()}

    </div>
  );
}

export default LibrarianBooks;