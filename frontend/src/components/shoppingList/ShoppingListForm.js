import {Header, List, Right, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ShoppingListItem from './ShoppingListItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  deleteShoppingListItem,
  allCheckShoppingListItem,
} from '../../modules/shoppingList';
import {useDispatch} from 'react-redux';
const ShoppingListForm = ({shoppingList, onFetchShoppingList}) => {
  const [checkCnt, setCheckCnt] = useState(0);
  const [prodIds, setProdIds] = useState([]);
  const [allChecked, setAllchecked] = useState(false);

  useEffect(() => {
    let list = [];
    let cnt = 0;
    for (let item of shoppingList) {
      if (item.isCheck === true) {
        cnt = cnt + 1;
        list.push(item.prodId);
      }
    }
    setProdIds(list);
    setCheckCnt(cnt);
  }, [shoppingList]);

  const dispatch = useDispatch();
  const onDelete = () => {
    if (checkCnt === 0) {
      return;
    }
    dispatch(deleteShoppingListItem({memberId: 1, prodIds}));
    setAllchecked(false);
  };
  const onAllChecked = () => {
    dispatch(allCheckShoppingListItem(!allChecked));
    setAllchecked(!allChecked);
  };
  return (
    <>
      <Header androidStatusBarColor={'rgb(240,41,28)'} style={styles.header}>
        <TouchableOpacity style={styles.headerLeft} onPress={onAllChecked}>
          {allChecked ? (
            <Icon name={'check-box-outline'} style={styles.checkbox} />
          ) : (
            <Icon name={'checkbox-blank-outline'} style={styles.checkbox} />
          )}
          <Text style={styles.headerLeftText}>{checkCnt}개 선택</Text>
        </TouchableOpacity>
        <Right>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.headerRightText}>상품 삭제</Text>
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <List>
          {shoppingList &&
            shoppingList.map(item => (
              <ShoppingListItem key={item.prodId} {...item} />
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
    marginLeft: 8,
  },
  headerRightText: {color: 'rgb(130,130,130)', marginRight: 10},
});
export default ShoppingListForm;
