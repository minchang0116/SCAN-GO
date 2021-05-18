import React, {useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';
import {SearchPage, Dashboard, LoginPage} from './pages';

function App() {
  const history = useHistory();
  useEffect(() => {
    // 토큰 없는 상황
    if (!sessionStorage.getItem('token')) {
      if (
        // 도착 혹은 가려는 곳이 로그인
        history.location.pathname === '/login' ||
        history.location.pathname === '/'
      ) {
        return;
      }
      alert('관리자 로그인이 필요합니다.');
      history.push('/login');
    }
  }, [history.location.pathname]);

  return (
    <>
      <Route component={LoginPage} path={['/', '/login']} exact />
      <Route component={Dashboard} path={['/dashboard']} exact />
      <Route component={SearchPage} path={['/search']} exact />
    </>
  );
}

export default App;
