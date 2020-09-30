import React from 'react';
import styles from './MainArticle.module.css';

function MainArticle({ news }) {
  if (!news) return null;

  const { multimedia, title, published_date } = news;

  return (
    <>
      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mainArticle}
      >
        <img src={multimedia[0].url} alt="" />
        <div className={styles.mainArticleTitle}>
          <h5>{published_date.substring(0, 10)}</h5>
          <h3>{title}</h3>
        </div>
      </a>
    </>
  );
}

export default MainArticle;
