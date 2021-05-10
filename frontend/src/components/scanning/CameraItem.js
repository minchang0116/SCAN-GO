/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, CardItem, Body, Text} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';

const CameraItem = ({lastItem}) => {
  return (
    <>
      <Card style={styles.card}>
        <CardItem style={styles.cardItem}>
          <Body style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri:
                  'http://image3.compuzone.co.kr/img/product_img/2021/0219/764689/764689_600.jpg',
              }}
              style={styles.productImg}
            />
            <View>
              <Text>{lastItem.prodName}</Text>
              <Text>{Number(lastItem.prodPrice).toLocaleString()}원</Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  productImg: {
    borderRadius: 6,
    width: 100,
    height: '100%',
  },
  card: {
    zIndex: 5,
    width: '95%',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 20,
    marginLeft: 'auto',
    borderRadius: 10,
  },
  cardItem: {
    borderRadius: 10,
    height: 100,
  },
});
export default CameraItem;
