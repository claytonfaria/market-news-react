import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './IndexSummary.module.css';

function IndexSummary() {
  return (
    <>
      <h4 className="pb-1 font-weight-bold">Major Indexes</h4>
      <div className={styles.indexWrap}>
        <div className={styles.indexItem}>
          <div className={styles.indexInfoWrap}>
            <div className={styles.indexName}>S&P 500</div>
            <div className={styles.indexPrice}>$3315.57</div>
            <div className={styles.indexInfoNumbers}>
              <span>+34.51</span>
              <span>(+1.04%)</span>
            </div>
          </div>
          <div className={styles.chartWrap}> Chart</div>
        </div>
        <div className={styles.indexItem}></div>
        <div className={styles.indexItem}></div>
        <div className={styles.indexItem}></div>
        <div className={styles.indexItem}></div>
      </div>
    </>
  );
}

export default IndexSummary;
