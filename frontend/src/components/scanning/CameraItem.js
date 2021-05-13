/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, CardItem, Body, Text} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';

let STYLE;
const CameraItem = ({lastItem, style}) => {
  STYLE = style;
  console.log('lastItem');
  console.log('data:image/jpeg;base64,' + lastItem.prodImage);
  return (
    <>
      <Card style={styles.card}>
        <CardItem style={styles.cardItem}>
          <Body style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri:
                  'data:image/jpeg;base64,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',
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
