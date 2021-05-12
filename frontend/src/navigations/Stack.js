import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BarcodeScanningPage,
  MainPage,
  PaymentList,
  ShoppingListPage,
  PaymentSuccessPage,
  PaymentPage,
  ImageScanningPage,
  LoginPage,
  MyInfoPage,
  RegisterForm,
  EventDetailPage,
  LoadingPage,
} from '../pages';
import * as asyncStorage from '../AsyncStorage/asyncStorage';
import {useDispatch} from 'react-redux';
import {fetchUserInfoWithAsyncStorage} from '../modules/userInfo';

const Stack = createStackNavigator();

const StackNav = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    console.log('Stack Header - 유저 정보 확인');
    checkUserInfo();
  }, []);

  const checkUserInfo = async () => {
    let userData = await asyncStorage.getObjectData('user');
    if (userData !== null) {
      console.log('유저 정보 Async 존재');
      console.dir(userData);
      let response = await dispatch(
        fetchUserInfoWithAsyncStorage({userData: userData}),
      );
      if (response.payload === undefined) {
        console.log('async 에러');
      }
    } else {
      console.log('저장된 유저 정보 없음! 로그인 필요!');
    }
  };

  return (
    <Stack.Navigator initialRouteName="LoadingPage">
      <Stack.Screen
        name="LoadingPage"
        component={LoadingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterForm"
        component={RegisterForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyInfoPage"
        component={MyInfoPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BarcodeScanningPage"
        component={BarcodeScanningPage}
        options={{
          headerShown: false,
          animationEnabled: false,
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ImageScanningPage"
        component={ImageScanningPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentList"
        component={PaymentList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShoppingListPage"
        component={ShoppingListPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentPage"
        component={PaymentPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentSuccessPage"
        component={PaymentSuccessPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventDetailPage"
        component={EventDetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
