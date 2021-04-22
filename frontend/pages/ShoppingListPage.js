import {Container} from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native';
import SubHeader from '../components/common/subHeader';
import ShoppingListFooter from '../components/shoppingList/ShoppingListFooter';
import ShoppingListContainer from '../containers/shoppingList/ShoppingListContainer';
const ShoppingListPage = () => {
  return (
    <Container>
      <SubHeader title={'sdfsdf'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ShoppingListContainer />
      </ScrollView>
      <ShoppingListFooter />
    </Container>
  );
};

export default ShoppingListPage;
