import React from 'react';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function MarketOverview() {
  return (
    <>
      <section className="pb-5">
        <div className="container pb-2 d-flex justify-content-between">
          <h4 className="font-weight-bold">Market Overview</h4>
          <h4 className="font-weight-bold">{'>'}</h4>
        </div>

        <div style={{ width: '100%', height: '650px' }}>
          <TradingViewEmbed
            widgetType={widgetType.MARKET_OVERVIEW}
            widgetConfig={{
              colorTheme: 'light',
              autosize: true,
              largeChartUrl: window.location.href + '{tvexchange}:{tvsymbol}',
            }}
            copyrightLink={false}
          />
        </div>
      </section>
    </>
  );
}

export default MarketOverview;
