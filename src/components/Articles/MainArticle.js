import React from 'react';
import styles from './MainArticle.module.css';

function MainArticle({ news }) {
  if (!news) return null;

  const { multimedia, title, published_date } = news;

  return (
    <>
      <a href="#.." className={styles.mainArticle}>
        <img src={multimedia[0].url} alt="" />
        <div className={styles.mainArticleTitle}>
          <h5>{published_date}</h5>
          <h3>{title}</h3>
        </div>
      </a>
    </>
  );
}

export default MainArticle;
