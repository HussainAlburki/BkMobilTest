import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsDetail from "./pages/NewsDetail";
import SourcePage from "./pages/SourcePage";
import "./pages/Home.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>BK MOBIL HABER</h2>
        <div>
          <Link to="/" className="nav-link">
            Anasayfa
          </Link>
          <Link to="/favorites" className="nav-link">
            Favoriler
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/source/:id" element={<SourcePage />} />
      </Routes>
    </Router>
  );
}
