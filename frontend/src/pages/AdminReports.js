import { useEffect, useState } from "react";
import api from "../api/axios";
import "./styles/AdminReports.css";

function AdminReports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const res = await api.get("/admin/reports");
      setReport(res.data);
    } catch (err) {
      console.log("Error fetching report");
    }
  };

  if (!report) return <p style={{ textAlign: "center", color: "white" }}>Loading...</p>;

  return (
    <div className="report-page admin-reports">
      <h1 className="report-title reports-title">Library Reports</h1>

      <div className="report-grid reports-grid">
        <div className="report-card">
          <h3>Total Students</h3>
          <p>{report.totalStudents}</p>
        </div>

        <div className="report-card">
          <h3>Total Librarians</h3>
          <p>{report.totalLibrarians}</p>
        </div>

        <div className="report-card">
          <h3>Total Books</h3>
          <p>{report.totalBooks}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminReports;