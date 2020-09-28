import React, { useEffect } from 'react';
import ArticleItem from '../components/Articles/ArticleItem';

function MoreArticles({ news }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="pt-4 container-lg">
      <h4 className="font-weight-bold pb-2">Latest Articles</h4>
      {news &&
        news.map((item, index) => <ArticleItem key={index} news={item} />)}
    </div>
  );
}

export default MoreArticles;
