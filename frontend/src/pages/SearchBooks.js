import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Books.css";

// 🔥 Combine all books from all categories
import { data } from "./CategoryBooksData"; 
// (we will create this file next step)

function SearchBooks() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const allBooks = Object.values(data).flat();

  const filtered = allBooks.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="books-page">
      <h1 className="books-title">Search Books</h1>

      <input
        className="search-input"
        placeholder="Search by book name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="books-grid">
        {filtered.map((b,i)=>(
          <div
            key={i}
            className="book-card"
            onClick={() =>
              navigate(
                `/book/${encodeURIComponent(b.title)}/${encodeURIComponent(b.author)}/${encodeURIComponent(b.cover)}`
              )
            }
          >
            <img src={b.cover} alt={b.title}/>
            <h3>{b.title}</h3>
            <p>{b.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBooks;
