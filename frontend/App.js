import {Container} from 'native-base';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/modules';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Container>
          <StatusBar />
          {/* <ShoppingListPage /> */}
          <MainPage />
        </Container>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
