import React from 'react';
import {Route} from 'react-router-dom';
import {
  SearchPage,
  Dashboard
} from './pages';

function App() {
  return (
    <>
      <Route component={Dashboard} path={['/']} exact />
      <Route component={SearchPage} path={['/search']} exact />
    </>
  );
}

export default App;
