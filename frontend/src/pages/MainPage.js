import {Container} from 'native-base';
import React, {useEffect} from 'react';
import MainFooter from '../components/common/MainFooter';
import MainHeader from '../components/common/MainHeader';
import MainTab from '../components/common/MainTab';
import RNShake from 'react-native-shake';

const MainPage = ({navigation}) => {
  useEffect(() => {
    RNShake.addEventListener('ShakeEvent', () => {
      console.log('쉐이킹!!');
      navigation.navigate('BarcodeScanningPage');
    });
  }, []);

  useEffect(() => {
    console.log('쉐이킹 이벤트 제거');
    return () => RNShake.removeEventListener('ShakeEvent');
  }, []);

  return (
    <Container>
      <MainHeader />
      <MainTab />
      <MainFooter navigation={navigation} />
    </Container>
  );
};

export default MainPage;
