import {Body, Left, ListItem, Right, Text, View} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {
  updateShoppingListItem,
  isCheckedShoppingListItem,
} from '../../modules/shoppingList';

const ShoppingListItem = ({
  imgUrl,
  isCheck,
  prodId,
  memberId,
  prodName,
  prodPrice,
  qty,
}) => {
  const dispatch = useDispatch();
  const onIncrease = () => {
    if (qty > 98) {
      dispatch(updateShoppingListItem({prodId, memberId: '1', qty: 99}));
      return;
    }
    dispatch(updateShoppingListItem({prodId, memberId: '1', qty: qty + 1}));
  };
  const onDecrease = () => {
    if (qty < 2) {
      dispatch(updateShoppingListItem({prodId, memberId: '1', qty: 1}));
      return;
    }
    dispatch(updateShoppingListItem({prodId, memberId: '1', qty: qty - 1}));
  };
  const onIsChecked = () => {
    dispatch(isCheckedShoppingListItem({prodId}));
  };

  return (
    <ListItem>
      <TouchableOpacity onPress={onIsChecked}>
        <Left style={styles.left2}>
          {isCheck ? (
            <Icon2 name={'check-box-outline'} style={styles.checkbox} />
          ) : (
            <Icon2 name={'checkbox-blank-outline'} style={styles.checkbox} />
          )}
          <Image style={styles.left} source={imgUrl} />
        </Left>
      </TouchableOpacity>
      <Body style={styles.body}>
        <Text style={styles.bodyTextName} numberOfLines={2}>
          {prodName}
        </Text>
        <Text style={styles.bodyTextPrice} numberOfLines={1}>
          {Number(prodPrice).toLocaleString('en')}
        </Text>
      </Body>
      <Right style={styles.right}>
        <TouchableOpacity onPress={onDecrease}>
          <Icon style={styles.cntIcon} name="minus" />
        </TouchableOpacity>
        <Text style={styles.cntText}>{qty}</Text>
        <TouchableOpacity onPress={onIncrease}>
          <Icon style={styles.cntIcon} name="plus" />
        </TouchableOpacity>
      </Right>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  checkboxFalse: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'rgb(170,170,170)',
  },
  left2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(170,170,170)',
  },
  body: {
    flex: 5,
  },
  bodyTextName: {
    fontSize: 15,
  },
  bodyTextPrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  left: {
    width: 60,
    height: 60,
  },
  right: {
    flex: 1,
    width: 50,
    height: 30,
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cntIcon: {
    fontSize: 19,
    color: 'rgb(100,100,100)',
  },
  cntText: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ShoppingListItem;
