import {Container} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SubHeader from '../components/common/SubHeader';
import Payment from '../components/payment/Payment';
import PaymentFooter from '../components/payment/PaymentFooter';

const PaymentPage = ({navigation}) => {
  const {shoppingList} = useSelector(({shoppingList}) => ({
    shoppingList: shoppingList,
  }));

  //   const onPayment = () => {
  //     if (sumPrice === '0') {
  //       return;
  //     }
  //     navigation.navigate('PaymentSuccessPage');
  //     Alert.alert(
  //       '결제 하시겠습니까?',
  //       '총 금액 : ' + sumPrice + '원',
  //       [
  //         {
  //           text: '아니요',
  //           style: 'cancel',
  //         },
  //         {
  //           text: '네',
  //           onPress: () => {
  //             dispatch(requestPayment(1));
  //             navigation.navigate('PaymentSuccessPage');
  //           },
  //         },
  //       ],
  //       {cancelable: true},
  //     );
  //   };
  return (
    <Container style={styles.container}>
      <SubHeader navigation={navigation} title={'결제하기'} isIcon={false} />
      <Payment shoppingList={shoppingList} />
      <PaymentFooter />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgb(230,230,230)'},
});

export default PaymentPage;
