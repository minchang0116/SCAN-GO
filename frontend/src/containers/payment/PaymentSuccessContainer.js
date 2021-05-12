import React from 'react';
import {useSelector} from 'react-redux';
import Spinner from '../../components/common/Spinner';
import PaymentSuccess from '../../components/payment/PaymentSuccess';

const PaymentSuccessContainer = ({navigation}) => {
  const {payment} = useSelector(({payment}) => ({
    payment: payment,
  }));
  return (
    <>
      {payment ? (
        <PaymentSuccess payment={payment} navigation={navigation} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PaymentSuccessContainer;
