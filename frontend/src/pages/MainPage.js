import { Container } from 'native-base';
import React from 'react';
import MainFooter from '../components/common/MainFooter';
import MainHeader from '../components/common/MainHeader';
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
