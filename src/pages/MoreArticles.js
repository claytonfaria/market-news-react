import React, { useEffect } from 'react';
import ArticleItem from '../components/Articles/ArticleItem';

function MoreArticles({ news, screenPosition }) {
  useEffect(() => {
    window.scrollTo({ top: screenPosition });
    // eslint-disable-next-line
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
