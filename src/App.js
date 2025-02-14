import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <a href="/" className="nav-link">
            Anasayfa
          </a>
          <a href="/favorites" className="nav-link">
            Favoriler
          </a>
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
