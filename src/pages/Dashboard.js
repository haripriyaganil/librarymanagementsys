import "./styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dash-page">
      <h1>User Dashboard</h1>

      <div className="dash-cards">
        <div className="dash-card">Browse Books</div>
        <div className="dash-card">My Borrowed Books</div>
        <div className="dash-card">Return Book</div>
        <div className="dash-card">Profile</div>
      </div>
    </div>
  );
}

export default Dashboard;
