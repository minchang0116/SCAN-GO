/* eslint-disable react-native/no-inline-styles */
import {Left, Right, View} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import AppText from '../common/AppText';

const ShoppingListFooter = ({shoppingList, sumPrice, navigation}) => {
  const dispatch = useDispatch();

  const onPayment = () => {
    if (sumPrice === '0') {
      return;
    }
    navigation.navigate('PaymentPage');
  };

  return (
    <View style={styles.footer}>
      <Left style={styles.footerLeft}>
        <AppText>결제 예정금액 : {sumPrice}원</AppText>
      </Left>
      <Right style={styles.footerRight}>
        <TouchableOpacity
          style={styles.footerRightBlock}
          onPress={() => {
            onPayment();
          }}>
          <AppText style={{color: 'white', fontSize: 20}}>결제하기</AppText>
        </TouchableOpacity>
      </Right>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 50,
    borderTopColor: 'rgb(240,240,240)',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
  footerRight: {
    backgroundColor: 'rgb(240,41,28)',
    flex: 2,
  },
  footerRightBlock: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLeft: {
    flex: 3,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentText: {
    fontWeight: 'bold',
  },
});

export default ShoppingListFooter;
