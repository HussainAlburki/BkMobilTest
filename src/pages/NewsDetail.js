import React from "react";
import { useParams } from "react-router-dom";
import "./NewsDetail.css";

export default function NewsDetail() {
  const { id } = useParams();
  const article = JSON.parse(localStorage.getItem("news-article-" + id));

  if (!article) return <h2>Article not found!</h2>;

  return (
    <div className="news-detail-container">
      <h1>{article.title}</h1>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-image"
      />
      <p>{article.content || article.description}</p>
      <p>
        <strong>Source:</strong> {article.source.name}
      </p>
      <p>
        <strong>Published at:</strong> {article.publishedAt}
      </p>
      <button
        className="favorite-button"
        onClick={() => {
          localStorage.setItem("favorite-" + id, JSON.stringify(article));
          window.location.href = "/favorites";
        }}
      >
        Favorilere Ekle
      </button>

      <button
        className="share-button"
        onClick={() => navigator.clipboard.writeText(window.location.href)}
      >
        Paylaş
      </button>

      <a href={`/source/${id}`} className="source-link">
        Habere Git
      </a>
    </div>
  );
}
