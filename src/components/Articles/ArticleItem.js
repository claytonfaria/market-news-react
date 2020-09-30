import React from 'react';
import styles from './ArticleItem.module.css';

function ArticleItem({ news }) {
  //   const reduceTextSize = (text, maxLength) => {
  //     if (text.length > maxLength) {
  //       return text.slice(0, maxLength) + '...';
  //     } else {
  //       return text;
  //     }
  //   };
  return (
    <a
      href={news && news.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.articleItem}
    >
      <div className={styles.articleImgContainer}>
        <img src={news.multimedia && news.multimedia[4].url} alt="" />
      </div>
      <div className={styles.articleRightside}>
        <h4>{news && news.title}</h4>
        <h5>{news && news.published_date.substring(0, 10)}</h5>
        <p>{news.abstract && news.abstract}</p>
      </div>
    </a>
  );
}

export default ArticleItem;
