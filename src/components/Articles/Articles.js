import React from 'react';
import ArticleItem from './ArticleItem';
import MainArticle from './MainArticle';
import { Link } from 'react-router-dom';

function Articles({ news }) {
  if (!news) return null;
  return (
    <>
      <main className="w-100">
        <MainArticle news={news[0]} />

        {news.slice(1, 12).map((item, index) => (
          <ArticleItem key={index} news={item} />
        ))}
      </main>
      <Link to="/articles" className="btn btn-info mb-3">
        More Articles
      </Link>
    </>
  );
}

export default Articles;
