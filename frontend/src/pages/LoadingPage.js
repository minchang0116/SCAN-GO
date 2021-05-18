/* eslint-disable react-hooks/exhaustive-deps*/
import React, {useCallback} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import * as asyncStorage from '../AsyncStorage/asyncStorage';
import {loadToken} from '../lib/api/client';
import {useFocusEffect} from '@react-navigation/core';
import Spinner from '../components/common/Spinner';
import {useDispatch} from 'react-redux';
import {fetchUserInfoWithAsyncStorage} from '../modules/userInfo';

const LoadingPage = ({navigation}) => {
  useFocusEffect(
    useCallback(async () => {
      if ((await asyncStorage.getData('token')) === false) {
        console.log('Loading페이지 토큰 없음');
        // 토큰 없으면 자동 로그인 활성화 안함. 있던 유저 정보 제거
        await asyncStorage.removeValue('user');
        // LoginPage로
        navigation.navigate('LoginPage');
      } else {
        // 토큰 있는 경우에는 유저 정보도 있다. MainPage로
        console.log('Loading페이지 토큰 있음');
        await loadToken();
        let userData = await asyncStorage.getObjectData('user');
        console.dir(userData);
        let response = await dispatch(
          fetchUserInfoWithAsyncStorage({userData}),
        );
        if (!response.payload) {
          console.log('async 에러');
        }
        ToastAndroid.showWithGravity(
          userData.toString(),
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.navigate('MainPage');
      }
    }, []),
  );

  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <Spinner />
      </View>
    </>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '90%',
  },
});
