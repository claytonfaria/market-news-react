import React from 'react';
import TickerTape from '../TradingViewWidgets/TickerTape';

function TickerBar() {
  return (
    <div className="App" style={{ background: 'rgba(0, 0, 0, 0.85)' }}>
      <TickerTape />{' '}
    </div>
  );
}

export default TickerBar;
