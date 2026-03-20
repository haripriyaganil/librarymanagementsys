import { Link } from "react-router-dom";
import "./styles/Books.css";

function Books() {
  const categories = [
    "Fantasy",
    "Fiction",
    "Literature",
    "Business",
    "Technology",
    "SelfHelp",
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
    <div className="books-page">
      <h1 className="books-title">Library Categories</h1>

      <div className="books-grid">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat}`}
            className="category-card"
          >
            <h2>{cat}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;