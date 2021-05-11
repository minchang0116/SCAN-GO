import React from 'react';
import {Route} from 'react-router-dom';
import {SearchPage, Dashboard, LoginPage} from './pages';

function App() {
  return (
    <>
      <Route component={LoginPage} path={['/', '/login']} exact />
      <Route component={Dashboard} path={['/dashboard']} exact />
      <Route component={SearchPage} path={['/search']} exact />
    </>
  );
}

export default App;
