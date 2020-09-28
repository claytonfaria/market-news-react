import React from 'react';

import EconomicCalendar from '../TradingViewWidgets/EconomicCalendar';
import MarketOverview from '../TradingViewWidgets/MarketOverview';
import StockOverview from '../TradingViewWidgets/StockOverview';

function SideBar() {
  return (
    <>
      <StockOverview />
      <MarketOverview />
      <EconomicCalendar />
    </>
  );
}

export default SideBar;
