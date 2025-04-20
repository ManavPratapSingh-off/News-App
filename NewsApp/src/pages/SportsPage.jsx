import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

function SportsPage({articles}) {
  

  return (
    <>
      <div className="card-container">
        {articles.map((article) => {
          return <NewsCard key={article.id} obj={article} />;
        })}
      </div>
    </>
  );
}

export default SportsPage;
