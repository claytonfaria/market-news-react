import React, { useState } from 'react';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function TickerBar() {
  return (
    <div className="App" style={{ background: 'rgba(0, 0, 0, 0.85)' }}>
      <TradingViewEmbed
        widgetType={widgetType.TICKER_TAPE}
        widgetConfig={{
          colorTheme: 'light',
          autosize: true,
          symbols: [
            {
              proName: 'FOREXCOM:SPXUSD',
              title: 'S&P 500',
            },
            {
              proName: 'FOREXCOM:NSXUSD',
              title: 'Nasdaq 100',
            },
            {
              proName: 'FOREXCOM:DJI',
              title: 'Dow Jones',
            },
            {
              proName: 'FX:EURUSD',
              title: 'EUR/USD',
            },
            {
              proName: 'BITSTAMP:BTCUSD',
              title: 'BTC/USD',
            },
            {
              description: 'IBOVESPA',
              proName: 'INDEX:IBOV',
            },
            {
              description: 'DAX',
              proName: 'XETR:DAX',
            },
            {
              description: 'NKY',
              proName: 'INDEX:NKY',
            },
          ],
        }}
        copyrightLink={false}
      />
    </div>
  );
}

export default TickerBar;
