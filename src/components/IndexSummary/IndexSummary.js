import React from 'react';
import styles from './IndexSummary.module.css';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';
import Container from 'react-bootstrap/Container';

function IndexSummary() {
  return (
    <>
      <Container>
        <h4 className="p-2 font-weight-bold">Major Indexes</h4>
        <div
          className="d-flex"
          style={{ overflowX: 'auto', overflowY: 'hidden' }}
        >
          <div className="mx-2 d-flex" style={{ minWidth: '350px' }}>
            <TradingViewEmbed
              widgetType={widgetType.MINI_CHART}
              widgetConfig={{
                colorTheme: 'light',
                symbol: 'FOREXCOM:SPXUSD',
                width: '100%',
                autosize: 'true',
              }}
              copyrightLink={false}
            />
          </div>
          <div className="mx-2 d-flex" style={{ minWidth: '350px' }}>
            <TradingViewEmbed
              widgetType={widgetType.MINI_CHART}
              widgetConfig={{
                colorTheme: 'light',
                symbol: 'FOREXCOM:NSXUSD',
                width: '100%',
                autosize: 'true',
              }}
              copyrightLink={false}
            />
          </div>
          <div className="mx-2 d-flex" style={{ minWidth: '350px' }}>
            <TradingViewEmbed
              widgetType={widgetType.MINI_CHART}
              widgetConfig={{
                colorTheme: 'light',
                symbol: 'FOREXCOM:DJI',
                width: '100%',
                autosize: 'true',
              }}
              copyrightLink={false}
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default IndexSummary;
