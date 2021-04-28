import {Header, List, Right, Text} from 'native-base';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ShoppingListItem from './ShoppingListItem';

const ShoppingListForm = ({
  shoppingList,
  onFetchShoppingList,
  onIncreaseShoppingListItem,
  onDecreaseShoppingListItem,
  onDeleteShoppingListItem,
}) => {
  console.log('쇼리폼 렌더링');
  return (
    <>
      <Header style={styles.header}>
        <TouchableOpacity style={styles.headerLeft}>
          <View style={styles.checkboxFalse} />
          <Text style={styles.headerLeftText}>0개 선택</Text>
        </TouchableOpacity>
        <Right>
          <TouchableOpacity>
            <Text style={styles.headerRightText}>상품 삭제</Text>
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List>
          {shoppingList.map(item => (
            <ShoppingListItem
              key={item.id}
              {...item}
              onIncreaseShoppingListItem={onIncreaseShoppingListItem}
            />
          ))}
        </List>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxFalse: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'rgb(130,130,130)',
  },
  header: {
    marginTop: 5,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'white',
    borderTopColor: 'black',
  },
  headerLeftText: {
    marginLeft: 10,
    color: 'rgb(130,130,130)',
  },
  headerLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerRightText: {color: 'rgb(130,130,130)'},
});
export default ShoppingListForm;
