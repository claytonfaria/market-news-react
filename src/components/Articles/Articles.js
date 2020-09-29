import React from 'react';
import ArticleItem from './ArticleItem';
import MainArticle from './MainArticle';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Articles({ news, setScreenPosition }) {
  let history = useHistory();

  if (!news) return null;

  const handleOnClick = () => {
    setScreenPosition(window.pageYOffset);
    history.push('/articles');
  };

  return (
    <>
      <main className="w-100 min-vh-100">
        <MainArticle news={news[0]} />

        {news.slice(1, 12).map((item, index) => (
          <ArticleItem key={index} news={item} />
        ))}
      </main>
      <Button variant="info" className="mb-3" onClick={handleOnClick}>
        More Articles
      </Button>
    </>
  );
}

export default Articles;
