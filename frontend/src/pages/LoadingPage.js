import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../components/common/AppText';
import * as asyncStorage from '../AsyncStorage/asyncStorage';

const LoadingPage = ({navigation}) => {
  useEffect(async () => {
    if ((await asyncStorage.getData('token')) === null) {
      // 토큰 없으면 자동 로그인 활성화 안함. 있던 유저 정보 제거
      await asyncStorage.removeValue('user');
      // LoginPage로
      navigation.navigate('LoginPage');
    } else {
      // 토큰 있는 경우에는 유저 정보도 있다. MainPage로
      navigation.navigate('MainPage');
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <AppText>LOADING...</AppText>
      </View>
    </>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
