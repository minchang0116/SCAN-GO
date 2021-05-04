import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/modules';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigations/Stack';
import {shoppingListApi} from './src/lib/api/shoppingList';
import {setCustomText} from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'NotoSansCJKkr-Light',
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: shoppingListApi,
      },
      serializableCheck: false,
    }),
});

const App = () => {
  setCustomText(customTextProps);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
