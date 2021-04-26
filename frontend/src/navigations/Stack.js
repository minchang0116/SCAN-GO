import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BarcodeScanningPage, MainTMPyj, PaymentList} from '../pages';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="MainTMPyj">
      <Stack.Screen
        name="MainTMPyj"
        component={MainTMPyj}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarcodeScanningPage"
        component={BarcodeScanningPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentList"
        component={PaymentList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
