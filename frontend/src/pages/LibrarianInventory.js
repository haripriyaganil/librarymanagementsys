import { useState } from "react";

function LibrarianInventory() {
  const [books, setBooks] = useState([
    { id: 1, title: "Clean Code", author: "Robert C Martin" },
    { id: 2, title: "Harry Potter", author: "J K Rowling" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editId, setEditId] = useState(null);

  const addBook = () => {
    if (!title || !author) return alert("Fill all fields");

    setBooks([...books, { id: Date.now(), title, author }]);
    setTitle("");
    setAuthor("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const startEdit = (book) => {
    setEditId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
  };

  const updateBook = () => {
    setBooks(
      books.map(book =>
        book.id === editId ? { ...book, title, author } : book
      )
    );
    setEditId(null);
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Librarian Inventory</h2>

      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {editId ? (
        <button onClick={updateBook}>Update Book</button>
      ) : (
        <button onClick={addBook}>Add Book</button>
      )}

      <hr />

      {books.map(book => (
        <div key={book.id}>
          <strong>{book.title}</strong> - {book.author}
          <button onClick={() => startEdit(book)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default LibrarianInventory;
