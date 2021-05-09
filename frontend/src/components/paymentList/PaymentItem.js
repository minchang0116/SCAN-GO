/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, CardItem} from 'native-base';
import ProductItem from './ProductItem';
import AppText from '../common/AppText';
import DetailModal from './DetailModal';

const PaymentItem = ({payment}) => {
  console.log('왜 없어 왜');
  console.log(payment);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Card>
        <CardItem header>
          <AppText style={{fontWeight: '700', fontSize: 22}}>
            {payment.txDateTime.substring(0, 10)}
            <AppText style={{fontWeight: '400'}}>
              &nbsp;&nbsp;({payment.id})
            </AppText>
          </AppText>
        </CardItem>
        <CardItem>
          <View style={styles.header2}>
            <AppText>
              결제금액 {payment.paymentAmount.toLocaleString()}원
            </AppText>
            <AppText>{payment.storeId}</AppText>
          </View>
        </CardItem>
        <FlatList
          data={payment.paymentDetail.slice(
            0,
            payment.paymentDetail.length < 2 ? payment.paymentDetail.length : 2,
          )}
          renderItem={({item}) => (
            <ProductItem product={item} key={item.prodId} />
          )}
        />
        <CardItem footer>
          <AppText style={styles.footer} onPress={toggleModal}>
            결제 상품 자세히 보기 &gt;{' '}
          </AppText>
        </CardItem>
      </Card>
      <DetailModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        payment={payment}
      />
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
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    marginTop: -15,
  },
});

export default PaymentItem;
