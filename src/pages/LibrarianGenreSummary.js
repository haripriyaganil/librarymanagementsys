import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import "./styles/LibrarianBooks.css";

function LibrarianGenreSummary() {
  const navigate = useNavigate();

  const [totalBooks, setTotalBooks] = useState(0);
  const [availableBooks, setAvailableBooks] = useState(0);
  const [borrowedBooks, setBorrowedBooks] = useState(0);
  const [totalHistoricalBorrows, setTotalHistoricalBorrows] = useState(0);
  const [totalHistoricalReturns, setTotalHistoricalReturns] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get(`/books`);
        const books = res.data;

        // Note: Assuming a basic calculation if books have `available` boolean or `availableCopies` integer
        // Adjust logic if `available` field differs
        let total = books.length;
        let available = 0;
        
        books.forEach((b) => {
          if (b.available !== false) available++; // Adjust condition per actual schema
        });

        let borrowed = total - available;

        setTotalBooks(total);
        setAvailableBooks(available);
        setBorrowedBooks(borrowed);

        const statsRes = await api.get('/transactions/stats');
        setTotalHistoricalBorrows(statsRes.data.totalBorrowed || 0);
        setTotalHistoricalReturns(statsRes.data.totalReturned || 0);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching genre stats:", err);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p style={{ padding: "40px", color: "white" }}>Loading stats...</p>;
  }

  return (
    <div className="books-page">
      <h1 className="books-title">All Books Summary</h1>

      <div
        style={{
          maxWidth: "420px",
          margin: "auto",
          background: "linear-gradient(135deg,#3b2416,#6b3f25)",
          padding: "30px",
          borderRadius: "18px",
          color: "#f5e6cf",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Library Status</h2>

        <p><strong>Total Books:</strong> {totalBooks}</p>
        <p><strong>Available Books:</strong> {availableBooks}</p>
        <p><strong>Currently Checked Out:</strong> {borrowedBooks}</p>
        <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "20px 0" }} />
        <p><strong>Total Borrowed History:</strong> {totalHistoricalBorrows}</p>
        <p><strong>Total Returned History:</strong> {totalHistoricalReturns}</p>
      </div>

      <div className="action-buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default LibrarianGenreSummary;