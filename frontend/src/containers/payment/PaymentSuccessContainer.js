import React from 'react';
import {useSelector} from 'react-redux';
import PaymentSuccess from '../../components/payment/PaymentSuccess';

const PaymentSuccessContainer = ({navigation}) => {
  const {payment} = useSelector(({payment}) => ({
    payment: payment,
  }));
  return (
    <>
      {payment.paymentList && (
        <PaymentSuccess payment={payment} navigation={navigation} />
      )}
    </>
  );
};

export default PaymentSuccessContainer;
