import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetail.css";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = useMemo(() => {
    return JSON.parse(localStorage.getItem(`news-article-${id}`));
  }, [id]);

  if (!article) return <h2>Article not found!</h2>;

  const handleAddToFavorites = () => {
    const favoriteKey = `favorite-${id}`;
    if (!localStorage.getItem(favoriteKey)) {
      localStorage.setItem(favoriteKey, JSON.stringify(article));
      navigate("/favorites");
    } else {
      alert("Bu haber zaten favorilerde.");
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Haber bağlantısı kopyalandı!");
  };

  return (
    <div className="news-detail-container">
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-image"
        />
      )}
      <p>{article.content || article.description}</p>
      <p>
        <strong>Source:</strong> {article.source.name}
      </p>
      <p>
        <strong>Published at:</strong> {article.publishedAt}
      </p>
      <button className="favorite-button" onClick={handleAddToFavorites}>
        Favorilere Ekle
      </button>

      <button className="share-button" onClick={handleShare}>
        Paylaş
      </button>

      <a href={`/source/${id}`} className="source-link">
        Habere Git
      </a>
    </div>
  );
}
