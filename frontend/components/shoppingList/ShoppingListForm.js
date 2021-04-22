import {Header, List, Right, Text} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ShoppingListItem from './ShoppingListItem';

const ShoppingListForm = ({shoppingList}) => {
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
      <List>
        {shoppingList.map(item => (
          <ShoppingListItem key={item.no} {...item} />
        ))}
      </List>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'white',
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
