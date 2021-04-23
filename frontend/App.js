import {Container} from 'native-base';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainPage from './src/pages/MainPage';
import ShoppingListPage from './src/pages/ShoppingListPage';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <StatusBar />
        {/* <ShoppingListPage /> */}
        <MainPage />
      </Container>
    </SafeAreaProvider>
  );
};

export default App;
