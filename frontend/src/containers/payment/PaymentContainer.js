import React from 'react';
import {useSelector} from 'react-redux';
import PaymentSuccess from '../../components/payment/PaymentSuccess';

const PaymentContainer = ({navigation}) => {
  const {payment} = useSelector(({payment}) => ({
    payment: payment,
  }));
  return (
    <>
      <PaymentSuccess payment={payment} navigation={navigation} />
    </>
  );
};

export default PaymentContainer;
