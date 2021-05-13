/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, CardItem, Body, Text} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';

let STYLE;
const CameraItem = ({lastItem, style}) => {
  STYLE = style;
  console.log('lastItem');
  console.log('data:image/png;base64,' + lastItem.prodImage);
  return (
    <>
      <Card style={styles.card}>
        <CardItem style={styles.cardItem}>
          <Body style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'data:image/png;base64,' + lastItem.prodImage,
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
  cardItem: {
    borderRadius: 10,
    height: 100,
    marginHorizontal: 10,
  },
  STYLE,
});

export default CameraItem;
