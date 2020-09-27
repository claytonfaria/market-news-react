import React from 'react';

import EconomicCalendar from './EconomicCalendar';
import MarketOverview from './MarketOverview';
import StockOverview from './StockOverview';

function RightSide() {
  return (
    <>
      <StockOverview />
      <MarketOverview />
      <EconomicCalendar />
    </>
  );
}

export default RightSide;
