import React, { useState, useEffect } from "react";
import "./Favorites.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const items = [];
    for (let key in localStorage) {
      if (key.startsWith("favorite-")) {
        items.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    setFavorites(items);
  }, []);

  const removeFavorite = (title) => {
    for (let key in localStorage) {
      try {
        const item = localStorage.getItem(key);
        if (item && item.includes(title)) {
          localStorage.removeItem(key);
        }
      } catch (e) {
        console.error("Error removing favorite:", e);
      }
    }
    setFavorites(favorites.filter((item) => item.title !== title));
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
                <a
                  href={`/news/${index}`}
                  onClick={() =>
                    localStorage.setItem(
                      "news-article-" + index,
                      JSON.stringify(item)
                    )
                  }
                  className="details-btn"
                >
                  Ayrıntılar
                </a>

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
