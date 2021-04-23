import React from 'react';
import {Container} from 'native-base';
import SubHeader from '../components/common/SubHeader';
import ShoppingListFooter from '../components/shoppingList/ShoppingListFooter';
import ShoppingListContainer from '../containers/shoppingList/ShoppingListContainer';
import MainHeader from '../components/common/MainHeader';
import MainFooter from '../components/common/MainFooter';
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
