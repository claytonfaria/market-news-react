import React, { useState } from 'react';
import styles from './TickerBar.module.css';

function TickerBar() {
  const [ticker, setTicker] = useState([
    {
      name: 'AAPL',
      amount: 110.08,
      change: 3.24,
      changepct: 3.03,
    },
    {
      name: 'MSFT',
      amount: 202.54,
      change: 2.15,
      changepct: 1.07,
    },
    {
      name: 'GOOG',
      amount: 1431,
      change: -28.83,
      changepct: -1.93,
    },
  ]);

  return (
    <div className={styles.tickerwrap}>
      {ticker.map((item, index) => (
        <div key={index} className={styles.ticker}>
          <h6 className={styles.tickeritem}>{item.name}</h6>
          <h6 className={styles.tickeritem}>{item.amount}</h6>
          <h6 className={styles.tickeritem}>{item.change}</h6>
          <h6 className={styles.tickeritem}>{item.changepct}</h6>
        </div>
      ))}
    </div>
  );
}

export default TickerBar;
