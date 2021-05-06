import {Container} from 'native-base';
import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SubHeader from '../components/common/SubHeader';
import Payment from '../components/payment/Payment';
import PaymentFooter from '../components/payment/PaymentFooter';

const PaymentPage = ({navigation}) => {
  const {shoppingList} = useSelector(({shoppingList}) => ({
    shoppingList: shoppingList,
  }));
  const [paymentType, setPaymentType] = useState(1);
  const onChangeType = typeNo => {
    setPaymentType(typeNo);
  };
  return (
    <Container style={styles.container}>
      <SubHeader navigation={navigation} title={'결제하기'} isIcon={false} />

      <Payment
        shoppingList={shoppingList}
        sumPrice={shoppingList.sumPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        paymentType={paymentType}
        onChangeType={onChangeType}
      />
      <PaymentFooter
        navigation={navigation}
        sumPrice={shoppingList.sumPrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        paymentType={paymentType}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgb(230,230,230)'},
});

export default PaymentPage;
