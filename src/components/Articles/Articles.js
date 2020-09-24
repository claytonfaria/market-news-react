import React, { useEffect, useState } from 'react';
import styles from './Articles.module.css';

function Articles() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const res = await fetch('./data.json');
    const data = await res.json();
    setNews(data);
  };
  //   console.log(news);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          <a href="#.." className={styles.mainArticle}>
            <img
              src={news[1] && news[1].urlToImage}
              alt=""
              //   className="img-fluid"
              className={styles.img}
            />
            <div className={styles.mainArticleTitle}>
              <h5>{news[1] && news[1].publishedAt}</h5>
              <h3 className={styles.h3}>{news[1] && news[1].description}</h3>
            </div>
          </a>
        </section>
        <section>articles</section>
      </main>
    </>
  );
}

export default Articles;
