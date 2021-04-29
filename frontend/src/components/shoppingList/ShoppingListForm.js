import {Header, List, Right, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ShoppingListItem from './ShoppingListItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ShoppingListForm = ({
  shoppingList,
  onFetchShoppingList,
  onUpdateShoppingListItem,
  onDeleteShoppingListItem,
}) => {
  const [checkCnt, setCheckCnt] = useState(0);
  useEffect(() => {
    let cnt = 0;
    for (let item of shoppingList) {
      if (item.isCheck === true) {
        cnt = cnt + 1;
      }
    }
    setCheckCnt(cnt);
  }, [shoppingList]);

  return (
    <>
      <Header style={styles.header}>
        <TouchableOpacity style={styles.headerLeft}>
          <Icon name={'checkbox-blank-outline'} style={styles.checkbox} />
          <Text style={styles.headerLeftText}>{checkCnt}개 선택</Text>
        </TouchableOpacity>
        <Right>
          <TouchableOpacity>
            <Text style={styles.headerRightText}>상품 삭제</Text>
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List>
          {shoppingList &&
            shoppingList.map(item => (
              <ShoppingListItem
                key={item.prodId}
                {...item}
                onUpdateShoppingListItem={onUpdateShoppingListItem}
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
  checkbox: {
    fontSize: 21,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(170,170,170)',
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
