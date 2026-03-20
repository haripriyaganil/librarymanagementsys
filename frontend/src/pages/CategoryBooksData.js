import { useParams } from "react-router-dom";
import "./styles/Books.css";




function CategoryBooks() {
  const { name } = useParams();
  const books = data[name] || [];

  return (
    <div className="books-page">
      <h1 className="books-title">{name}</h1>

      <div className="books-grid">
        {books.map((b, i) => (
          <div key={i} className="book-card-vertical">

  <div className="book-image-box">
    <img src={b.cover} alt={b.title} />
  </div>

  <h3 className="book-title">{b.title}</h3>
  <p className="book-author">{b.author}</p>

  <div className="book-status">AVAILABLE</div>

</div>

        ))}
      </div>
    </div>
  );
}

export default CategoryBooks;
