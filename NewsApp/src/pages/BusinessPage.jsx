import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';


function BusinessPage({articles}) {
  
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

export default BusinessPage