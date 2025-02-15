import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query || "latest"}&apiKey=${
          process.env.REACT_APP_NEWS_API_KEY
        }`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }, [query]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />
      <div className="news-grid">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>{item.publishedAt}</small>
            <small>{item.source.name}</small>
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
          </div>
        ))}
      </div>
    </div>
  );
}
