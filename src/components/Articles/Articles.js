import React, { useEffect, useState } from 'react';
import ArticleItem from './ArticleItem';
import MainArticle from './MainArticle';

function Articles() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const res = await fetch('./data.json');
    // const res = await fetch(
    //   'https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=Isf67De2hk2oVH5t9rrXg9ceoNjWNaOq'
    // );
    const data = await res.json();
    setNews(data.results);
  };

  //   https://api.nytimes.com/svc/topstories/v2/business.json?api-key=Isf67De2hk2oVH5t9rrXg9ceoNjWNaOq

  return (
    <>
      <main className="w-100">
        <MainArticle news={news[0]} />

        {news.slice(1, 12).map((item, index) => (
          <ArticleItem key={index} news={item} />
        ))}
      </main>
    </>
  );
}

export default Articles;
