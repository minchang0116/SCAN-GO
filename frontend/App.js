import {Container} from 'native-base';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/modules';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigations/Stack';

const store = configureStore({
  reducer: rootReducer,
});


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StackNav />
      </NavigationContainer>
      </Provider>
  );
};

export default App;
