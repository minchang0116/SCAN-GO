import React from 'react';
import {Container} from 'native-base';
import {ScrollView} from 'react-native';
import SubHeader from '../components/common/SubHeader';
import ShoppingListFooter from '../components/shoppingList/ShoppingListFooter';
import ShoppingListContainer from '../containers/shoppingList/ShoppingListContainer';
const ShoppingListPage = () => {
  return (
    <Container>
      <SubHeader title={'장바구니'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ShoppingListContainer />
      </ScrollView>
      <ShoppingListFooter />
    </Container>
  );
};

export default ShoppingListPage;
