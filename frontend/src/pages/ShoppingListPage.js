import React from 'react';
import {Container} from 'native-base';
import SubHeader from '../components/common/SubHeader';
import ShoppingListFooter from '../components/shoppingList/ShoppingListFooter';
import ShoppingListContainer from '../containers/shoppingList/ShoppingListContainer';
const ShoppingListPage = ({navigation}) => {
  return (
    <Container>
      <SubHeader navigation={navigation} title={'장바구니'} />
      <ShoppingListContainer />
    </Container>
  );
};

export default ShoppingListPage;
