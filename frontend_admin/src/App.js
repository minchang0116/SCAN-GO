import React from 'react';
import {Route} from 'react-router-dom';
import {
  ByCostomerPage,
  ByDatePage,
  ByProductPage,
  Dashboard
} from './pages';

function App() {
  return (
    <>
      <Route component={Dashboard} path={['/']} exact />
      <Route component={ByCostomerPage} path={['/bycostomer']} exact />
      <Route component={ByDatePage} path={['/bydate']} exact />
      <Route component={ByProductPage} path={['/byproduct']} exact />
    </>
  );
}

export default App;
