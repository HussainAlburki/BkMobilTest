import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = useCallback(() => {
    const items = Object.keys(localStorage)
      .filter((key) => key.startsWith("favorite-"))
      .map((key) => JSON.parse(localStorage.getItem(key)));
    setFavorites(items);
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const removeFavorite = (title) => {
    const keyToRemove = Object.keys(localStorage).find(
      (key) =>
        key.startsWith("favorite-") && localStorage.getItem(key).includes(title)
    );
    if (keyToRemove) {
      localStorage.removeItem(keyToRemove);
      loadFavorites();
    }
  };

  return (
    <div className="favorites-container">
      <h1>Favoriler</h1>
      <div className="news-grid">
        {favorites.length ? (
          favorites.map((item, index) => (
            <div key={index} className="news-card">
              {item.urlToImage && (
                <img src={item.urlToImage} alt={item.title} />
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="button-group">
                <Link
                  to={`/news/${index}`}
                  onClick={() =>
                    localStorage.setItem(
                      `news-article-${index}`,
                      JSON.stringify(item)
                    )
                  }
                  className="details-btn"
                >
                  Ayrıntılar
                </Link>

                <button
                  className="remove-btn"
                  onClick={() => removeFavorite(item.title)}
                >
                  Favorilerden Çıkar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Hiç favori haber yok.</p>
        )}
      </div>
    </div>
  );
}
