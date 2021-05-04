import {Container} from 'native-base';
import React from 'react';
import MainFooter from '../components/common/MainFooter';
import MainHeader from '../components/common/MainHeader';
import MainTab from '../components/common/MainTab';

const MainPage = ({navigation}) => {
  return (
    <Container>
      <MainHeader />
      <MainTab />
      <MainFooter navigation={navigation} />
    </Container>
  );
};

export default MainPage;
