import {Footer, Left, Right, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';

const ShoppingListFooter = ({shoppingList, navigation}) => {
  const [sumPrice, setSumPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    for (let item of shoppingList) {
      price += item.prodPrice * item.qty;
    }
    setSumPrice(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  }, [shoppingList]);

  const onPayment = () => {
    Alert.alert(
      '결제 하시겠습니까?',
      '총 금액 : ' + sumPrice + '원',
      [
        {
          text: '아니요',
          style: 'cancel',
        },
        {
          text: '네',
          onPress: () => navigation.navigate('PaymentPage'),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <Footer style={styles.footer}>
      <Left style={styles.footerLeft}>
        <Text>결제 예정금액 : {sumPrice}원</Text>
      </Left>
      <Right style={styles.footerRight}>
        <TouchableOpacity
          style={styles.footerRightBlock}
          onPress={() => {
            onPayment();
          }}>
          <Text style={{color: 'white', fontSize: 20}}>결제하기</Text>
        </TouchableOpacity>
      </Right>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
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
});
export default ShoppingListFooter;
