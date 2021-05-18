/* eslint-disable react-hooks/exhaustive-deps*/
import React, {useCallback} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import * as asyncStorage from '../AsyncStorage/asyncStorage';
import {loadToken} from '../lib/api/client';
import {useFocusEffect} from '@react-navigation/core';
import Spinner from '../components/common/Spinner';
import {useDispatch} from 'react-redux';
import {fetchUserInfoWithAsyncStorage} from '../modules/userInfo';

const LoadingPage = ({navigation}) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
<<<<<<< Updated upstream
      checkTokenAndMovePage();
    }, []),
  );

  const dispatch = useDispatch();
  const checkTokenAndMovePage = async () => {
    if ((await asyncStorage.getData('token')) === false) {
      console.log('Loading페이지 토큰 없음');
      // 토큰 없으면 자동 로그인 활성화 안함. 있던 유저 정보 제거
      await asyncStorage.removeValue('user');
      // LoginPage로
      navigation.navigate('LoginPage');
    } else {
      // 토큰 있는 경우에는 유저 정보도 있다. MainPage로
      const userData = await asyncStorage.getObjectData('user');
      if (userData !== false) {
        ToastAndroid.show('유저 정보 Async 존재', ToastAndroid.SHORT);
        console.dir(userData);
        let response = await dispatch(
          fetchUserInfoWithAsyncStorage({userData}),
        );
        if (response.payload === false) {
          ToastAndroid.show('async 에러', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(
          '저장된 유저 정보 없음! 로그인 필요!',
          ToastAndroid.SHORT,
        );
        navigation.navigate('LoginPage');
      }

      await loadToken();
      navigation.navigate('MainPage');
    }
  };

=======
      const checkTokenAndMovePage = async () => {
        if (!(await asyncStorage.getData('token'))) {
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
          let response = await dispatch(
            fetchUserInfoWithAsyncStorage({userData: userData}),
          );
          console.log('유저 정보 불러옴')
          console.log(response.payload);
          navigation.navigate('MainPage');
        }
      };

      checkTokenAndMovePage();
    }, []),
  );
  
>>>>>>> Stashed changes
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
