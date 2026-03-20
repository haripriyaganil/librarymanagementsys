import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Books.css";

function BorrowedBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBooks(stored);
  }, []);

  return (
    <div className="books-page">
      <h1 className="books-title">My Borrowed Books</h1>

      {books.length === 0 ? (
        <p style={{ textAlign: "center", opacity: 0.7 }}>
          You have not borrowed any books yet.
        </p>
      ) : (
        <div className="books-grid">
          {books.map((b, i) => (
            <div
              key={i}
              className="book-card"
              onClick={() =>
                navigate(
                  `/book/${encodeURIComponent(b.title)}/${encodeURIComponent(
                    b.author
                  )}/${encodeURIComponent(b.cover)}`
                )
              }
            >
              <img src={b.cover} alt={b.title} />
              <h3>{b.title}</h3>
              <p>{b.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BorrowedBooks;