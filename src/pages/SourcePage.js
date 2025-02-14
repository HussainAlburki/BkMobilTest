import React from "react";
import { useParams } from "react-router-dom";

export default function SourcePage() {
  const { id } = useParams();
  const article = JSON.parse(localStorage.getItem("news-article-" + id));

  if (!article) return <h2>Article not found!</h2>;

  return (
    <div className="source-page-container">
      <h2>{article.title}</h2>
      <iframe
        src={article.url}
        title={article.title}
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}
