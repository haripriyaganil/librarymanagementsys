import { useState } from "react";

function FineCalculator() {
  const [dueDate, setDueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [fine, setFine] = useState(0);

  const calculateFine = () => {
    const due = new Date(dueDate);
    const returned = new Date(returnDate);

    const diff = returned - due;
    const daysLate = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (daysLate > 0) {
      setFine(daysLate * 5); // ₹5 per day
    } else {
      setFine(0);
    }
  };

  return (
    <div>
      <h2>Fine Calculator</h2>

      <p>Due Date:</p>
      <input type="date" onChange={(e) => setDueDate(e.target.value)} />

      <p>Return Date:</p>
      <input type="date" onChange={(e) => setReturnDate(e.target.value)} />

      <br /><br />

      <button onClick={calculateFine}>Calculate Fine</button>

      <h3>Fine Amount: ₹{fine}</h3>
    </div>
  );
}

export default FineCalculator;
