/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import {Card, CardItem, Text, Body, Left, Right} from 'native-base';
import ProductItem from './ProductItem';
import Modal from 'react-native-modal';
import IconAntD from 'react-native-vector-icons/AntDesign';
import ProductItemInModal from './ProductItemInModal';

const PaymentItem = ({payment}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Card>
        <CardItem header style={styles.header}>
          <Text style={{fontWeight: '700', fontSize: 22}}>{payment.date}</Text>
          <Text>&nbsp;&nbsp;({payment.orderNo})</Text>
        </CardItem>
        <CardItem>
          <Body>
            <View style={styles.thumbnail}>
              <Left>
                <Text>결제금액 {payment.total}원</Text>
              </Left>
              <Right>
                <Text>{payment.storeName}</Text>
              </Right>
            </View>
          </Body>
        </CardItem>
        {payment.products
          .slice(0, payment.products.length < 2 ? payment.products.length : 2)
          .map((product, i) => {
            return <ProductItem item={product} key={i} />;
          })}
        <CardItem footer>
          <Text style={styles.footer} onPress={toggleModal}>
            결제 상품 자세히 보기 &gt;{' '}
          </Text>
        </CardItem>
      </Card>
      <Modal
        isVisible={isModalVisible}
        style={styles.detail}
        onBackdropPress={toggleModal}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={{flex: 1}}>
          <Card>
            <CardItem header style={styles.header}>
              <Text style={{fontWeight: '700', fontSize: 22}}>
                {payment.date}
              </Text>
              <Text>&nbsp;&nbsp;({payment.orderNo})</Text>
              <TouchableHighlight
                underlayColor="tansparent"
                style={styles.close}
                onPress={toggleModal}>
                <IconAntD name="close" size={30} color="rgb(142, 144, 144)" />
              </TouchableHighlight>
            </CardItem>
          </Card>
          <FlatList
            data={payment.products}
            renderItem={({item}) => {
              return <ProductItemInModal item={item} />;
            }}
            numColumns={3}
          />
        </View>
      </Modal>
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
  // detail: {
  //   backgroundColor: 'rgb(255,255,255)',
  //   borderRadius: 10,
  //   height: '70%',
  //   width: '90%',
  // },
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '30%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
  },
  close: {
    // zIndex: 5,
    // width: 5,
    // height: 5,
    position: 'absolute',
    left: '100%',
  },
});

export default PaymentItem;
