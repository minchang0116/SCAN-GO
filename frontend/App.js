import {Container} from 'native-base';
import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ShoppingListPage from './pages/ShoppingListPage';

const App = () => {
  return (
    <SafeAreaProvider>
      <Container>
        <StatusBar />
        <ShoppingListPage />
      </Container>
    </SafeAreaProvider>
  );
};

export default App;
