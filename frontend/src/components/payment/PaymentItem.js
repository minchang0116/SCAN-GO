/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, CardItem, Text, Body, Left, Right} from 'native-base';
import ProductItem from './ProductItem';

const PaymentItem = ({item, index}) => {
  return (
    <>
      <Card key={index}>
        <CardItem header style={styles.header}>
          <Text style={{fontWeight: '700', fontSize: 22}}>{item.date}</Text>
          <Text>&nbsp;&nbsp;({item.orderNo})</Text>
        </CardItem>
        <CardItem>
          <Body>
            <View style={styles.thumbnail}>
              <Left>
                <Text>결제금액 {item.total}원</Text>
              </Left>
              <Right>
                <Text>{item.storeName}</Text>
              </Right>
            </View>
          </Body>
        </CardItem>
        {item.products.map((product, i) => {
          return <ProductItem item={product} index={i} />;
        })}
        <CardItem footer>
          <Text style={styles.footer} onPress={goToDetail}>
            결제 상품 자세히 보기 &gt;{' '}
          </Text>
        </CardItem>
      </Card>
    </>
  );
};

const goToDetail = () => {
  console.log('hi');
};

const styles = StyleSheet.create({
  footer: {
    color: 'rgb(142, 144, 144)',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: 'rgb(213, 213, 213)',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  thumbnail: {
    flexDirection: 'row',
    borderRadius: 6,
  },
});

export default PaymentItem;
