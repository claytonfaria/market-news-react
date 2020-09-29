import React from 'react';
import { TradingViewEmbed, widgetType } from 'react-tradingview-embed';

function CompanyProfile({ ticker }) {
  return (
    <section
      style={{
        width: '100%',
        height: '800px',
      }}
    >
      <TradingViewEmbed
        widgetType={widgetType.COMPANY_PROFILE}
        widgetConfig={{
          colorTheme: 'light',
          autosize: true,
          symbol: `${ticker}`,
          largeChartUrl:
            'https://marketnews.netlify.app/{tvexchange}:{tvsymbol}',
        }}
        copyrightLink={false}
      />
    </section>
  );
}

export default CompanyProfile;
