import React from 'react';
import {Route} from 'react-router-dom';
import {
  ByCostomerPage,
  ByDatePage,
  ByPricePage,
  StatisticsDatePage,
  StatisticsProductPage,
} from './pages';

function App() {
  return (
    <>
      <Route component={ByCostomerPage} path={['/', '/bycostomer']} exact />
      <Route component={ByDatePage} path={['/bydate']} exact />
      <Route component={ByPricePage} path={['/byprice']} exact />
      <Route component={StatisticsDatePage} path={['/sdate']} exact />
      <Route component={StatisticsProductPage} path={['/sproduct']} exact />
    </>
  );
}

export default App;
