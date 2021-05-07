/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {Card, CardItem, Body, Left, Right, List, ListItem} from 'native-base';
import ProductItem from './ProductItem';
import Modal from 'react-native-modal';
import IconAntD from 'react-native-vector-icons/AntDesign';
import ProductItemInModal from './ProductItemInModal';
import AppText from '../common/AppText';

const PaymentItem = ({payment}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Card>
        <CardItem header style={styles.header}>
          <AppText style={{fontWeight: '700', fontSize: 22}}>
            {payment.txDateTime.slice(0, 10)}
          </AppText>
          <AppText>&nbsp;&nbsp;({payment.id})</AppText>
        </CardItem>
        <CardItem>
          <Body>
            <View style={styles.thumbnail}>
              <Left>
                <AppText>결제금액 {payment.paymentAmount}원</AppText>
              </Left>
              <Right>
                <AppText>{payment.storeId}</AppText>
              </Right>
            </View>
          </Body>
        </CardItem>
        {payment.paymentDetail
          .slice(
            0,
            payment.paymentDetail.length < 2 ? payment.paymentDetail.length : 2,
          )
          .map((product, i) => {
            return <ProductItem item={product} key={i} />;
          })}
        <CardItem footer>
          <AppText style={styles.footer} onPress={toggleModal}>
            결제 상품 자세히 보기 &gt;{' '}
          </AppText>
        </CardItem>
      </Card>
      <Modal
        isVisible={isModalVisible}
        style={styles.detail}
        onBackdropPress={toggleModal}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={{flex: 1, width: '100%'}}>
          <Card>
            <CardItem header style={styles.header}>
              <AppText style={{fontWeight: '700', fontSize: 22}}>
                {payment.txDateTime.slice(0, 10)}
              </AppText>
              <AppText>&nbsp;&nbsp;({payment.id})</AppText>
              <TouchableHighlight
                underlayColor="transparent"
                style={styles.close}
                onPress={toggleModal}>
                <IconAntD name="close" size={30} color="rgb(142, 144, 144)" />
              </TouchableHighlight>
            </CardItem>
          </Card>
          <List
            data={payment.paymentDetail}
            renderItem={({item}) => {
              return (
                <ListItem>
                  <ProductItemInModal item={item} />;
                </ListItem>
              );
            }}
            numColumns={1}
            keyExtractor={item => item.prodId}
            style={{width: '100%'}}
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
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '30%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
  },
  close: {
    position: 'absolute',
    left: '100%',
  },
});

export default PaymentItem;
