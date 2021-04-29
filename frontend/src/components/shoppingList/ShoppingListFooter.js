import {Footer, Left, Right, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const ShoppingListFooter = ({shoppingList}) => {
  const [sumPrice, setSumPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    for (let item of shoppingList) {
      price += item.prodPrice * item.qty;
    }
    setSumPrice(price);
  }, [shoppingList]);

  return (
    <Footer style={styles.footer}>
      <Left style={styles.footerLeft}>
        <Text>결제예정금액 : {sumPrice.toLocaleString()}원</Text>
      </Left>
      <Right>
        <TouchableOpacity style={styles.footerRight}>
          <Text style={{color: 'white', fontSize: 20}}>결제하기</Text>
        </TouchableOpacity>
      </Right>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginBottom: 0.1,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.5,
    borderColor: '#000',
    backgroundColor: 'white',
  },
  footerRight: {
    backgroundColor: 'rgb(218,41,28)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerLeft: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ShoppingListFooter;
