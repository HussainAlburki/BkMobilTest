import React from "react";

export default function NewsCard({ article, onFavorite, onDetails }) {
  return (
    <div className="news-card">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.source.name}</p>
      <button onClick={onFavorite}>Favorilere Ekle</button>
      <button onClick={onDetails}>Ayrıntılar</button>
    </div>
  );
}
