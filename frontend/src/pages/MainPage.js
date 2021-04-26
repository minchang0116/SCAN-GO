import {Container, Text} from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native';
import MainFooter from '../components/common/MainFooter';
import MainHeader from '../components/common/MainHeader';
import EventProduct from '../components/productList/EventProduct';
import ProductListTab from '../components/productList/ProductListTab';
const MainPage = () => {
  return (
    <Container>
      <MainHeader />
      <ProductListTab />
      <MainFooter />
    </Container>
  );
};

export default MainPage;
