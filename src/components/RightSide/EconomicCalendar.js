import React from 'react';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function EconomicCalendar() {
  return (
    <>
      <section className="pb-5">
        <div className="container pb-2 d-flex justify-content-between">
          <h4 className="font-weight-bold">Economic Calendar</h4>
          <h4 className="font-weight-bold">></h4>
        </div>

        <div style={{ width: '100%', height: '650px' }}>
          <TradingViewEmbed
            widgetType={widgetType.ECONOMIC_CALENDAR}
            widgetConfig={{
              colorTheme: 'light',
              autosize: true,
            }}
            copyrightLink={false}
          />
        </div>
      </section>
    </>
  );
}

export default EconomicCalendar;
