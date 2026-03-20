import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

import LibrarianInventory from "./pages/LibrarianInventory";
import FineCalculator from "./pages/FineCalculator";
import Reports from "./pages/Reports";
import AdminLibrarians from "./pages/AdminLibrarians";
import BorrowedBooks from "./pages/BorrowedBooks";
import BooksDetails from "./pages/BooksDetails";
import BookDetails from "./pages/BookDetails";
import LibrarianDashboard from "./pages/LibrarianDashboard";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/StudentDashboard";
import MyBooks from "./pages/MyBooks";
import HistoryByCategory from "./pages/HistoryByCategory";
import Wishlist from "./pages/Wishlist";
import AdminDashboard from "./pages/AdminDashboard";
import AdminManageLibrarians from "./pages/AdminManageLibrarians";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import LibrarianBooks from "./pages/LibrarianBooks";
import AdminStudents from "./pages/AdminStudents";
import AdminGenres from "./pages/AdminGenres";
import AdminReports from "./pages/AdminReports";
import LibrarianGenreSummary from "./pages/LibrarianGenreSummary";
import BackButton from "./components/BackButton";
import Books from "./pages/Books";
import CategoryBooks from "./pages/CategoryBooks";
import StudentFines from "./pages/StudentFines";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BackButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/inventory" element={<LibrarianInventory />} />
        <Route path="/fine" element={<FineCalculator />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/book/:id" element={<BooksDetails />} />
        <Route path="/trending-book" element={<BookDetails />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="/librarian" element={<LibrarianDashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/librarian-dashboard" element={<LibrarianDashboard />} />
        <Route path="/admin/librarians" element={<AdminLibrarians />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/history" element={<HistoryByCategory />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-librarians" element={<AdminManageLibrarians />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/librarian-books" element={<LibrarianBooks />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/genres" element={<AdminGenres />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/librarian-genre-summary" element={<LibrarianGenreSummary />} />
        <Route path="/library" element={<Books />} />
        <Route path="/fines" element={<StudentFines />} />
        <Route path="/category/:category" element={<CategoryBooks />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
