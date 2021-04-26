/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {Card, CardItem, Text, Body, Left, Right} from 'native-base';
import ProductItem from './ProductItem';
import Modal from 'react-native-modal';
import IconAntD from 'react-native-vector-icons/AntDesign';

const PaymentItem = ({item}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Card>
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
          return <ProductItem item={product} key={i} />;
        })}
        <CardItem footer>
          <Text style={styles.footer} onPress={toggleModal}>
            결제 상품 자세히 보기 &gt;{' '}
          </Text>
        </CardItem>
        <Modal isVisible={isModalVisible} style={styles.detail}>
          <View style={{flex: 1}}>
            <Card>
              <TouchableHighlight
                underlayColor="tansparent"
                style={styles.close}
                onPress={toggleModal}>
                <IconAntD name="close" size={30} color="rgb(255, 255, 255)" />
              </TouchableHighlight>
              <CardItem header style={styles.header}>
                <Text style={{fontWeight: '700', fontSize: 22}}>
                  {item.date}
                </Text>
                <Text>&nbsp;&nbsp;({item.orderNo})</Text>
              </CardItem>
              {item.products.map((product, i) => {
                return <ProductItem item={product} key={i} />;
              })}
            </Card>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </Card>
    </>
  );
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
  detail: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
    height: '70%',
  },
  close: {
    zIndex: 10,
    width: 50,
    height: 50,
    position: 'absolute',
    left: '50%',
  },
});

export default PaymentItem;
