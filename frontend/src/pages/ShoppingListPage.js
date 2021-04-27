import React from 'react';
import {Container} from 'native-base';
import SubHeader from '../components/common/SubHeader';
import ShoppingListFooter from '../components/shoppingList/ShoppingListFooter';
import ShoppingListContainer from '../containers/shoppingList/ShoppingListContainer';
const ShoppingListPage = () => {
  return (
    <Container>
      <SubHeader title={'장바구니'} />
      <ShoppingListContainer />
      <ShoppingListFooter />
    </Container>
  );
};

export default ShoppingListPage;
