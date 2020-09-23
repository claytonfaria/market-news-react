import React, { useState } from 'react';
import Ticker from 'react-ticker';

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
    {
      name: 'PETR',
      amount: 110.08,
      change: 3.24,
      changepct: 3.03,
    },
    {
      name: 'VALE',
      amount: 202.54,
      change: 2.15,
      changepct: 1.07,
    },
  ]);

  const getColor = (item) => (item > 0 ? ' text-success' : ' text-danger');

  return (
    <Ticker speed={4}>
      {() => (
        <div className="d-flex py-1">
          {ticker.map((item, index) => (
            <div key={index} className="d-flex p-2">
              <h6 className="px-1">{item.name}</h6>
              <h6 className="px-1">{item.amount}</h6>
              <h6 className={'px-1' + getColor(item.change)}>
                {item.change > 0 && '+'}
                {item.change}
              </h6>
              <h6 className={'px-1' + getColor(item.changepct)}>
                ({item.change > 0 && '+'}
                {item.changepct}%)
              </h6>
            </div>
          ))}
        </div>
      )}
    </Ticker>
  );
}

export default TickerBar;
