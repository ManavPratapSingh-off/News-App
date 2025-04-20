import React, { lazy, useContext, useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { NewsContext } from "../contexts/NewsContext";
import axios from "axios";

import newsJson from "../mock_news_100.json";

function Home({ articles }) {
  const API_KEY = "f0c2a9af25e9c692a2f70b8b8349491c";

  const { query } = useContext(NewsContext);

  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    if (query === "") return;

    fetch(
      `https://gnews.io/api/v4/top-headlines?category=${query}&lang=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        Array.isArray(data.articles)
          ? setQueryData(data.articles)
          : setQueryData([])
      )
      .catch((err) => console.log(`Manav Pratap Singh : ${err.message}`));
  }, [query]);

  return (
    <div className="card-container">
      {(query === "" ? articles : queryData).map((article, index) => {
        return <NewsCard key={index} obj={article} />;
      })}
    </div>
  );
}

export default Home;
