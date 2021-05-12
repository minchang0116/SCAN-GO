import {Container} from 'native-base';
import React, {useEffect} from 'react';
import MainFooter from '../components/common/MainFooter';
import MainHeader from '../components/common/MainHeader';
import MainTab from '../components/common/MainTab';
import RNShake from 'react-native-shake';
import {BackHandler, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const MainPage = () => {
  const navigation = useNavigation();
  // const [isExitApp, setIsExitApp] = useState(false);
  let isExitApp = false;
  useEffect(() => {
    RNShake.addEventListener('ShakeEvent', () => {
      console.log('쉐이킹!!');
      navigation.navigate('BarcodeScanningPage');
    });

    return () => {
      console.log('쉐이킹 이벤트 제거');
      RNShake.removeEventListener('ShakeEvent');
    };
  }, []);

  const backAction = () => {
    if (isExitApp === false) {
      isExitApp = true;
      ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
      setTimeout(() => {
        isExitApp = false;
      }, 5000);
    } else {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('이벤트blur');
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe2 = navigation.addListener('focus', () => {
      console.log('이벤트focus');
      BackHandler.addEventListener('hardwareBackPress', backAction);
    });
    return unsubscribe2;
  }, [navigation]);

  return (
    <Container>
      <MainHeader />
      <MainTab />
      <MainFooter navigation={navigation} />
    </Container>
  );
};

export default MainPage;
