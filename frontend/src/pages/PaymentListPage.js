import React from 'react';
import SubHeader from '../components/common/SubHeader';
import MainFooter from '../components/common/MainFooter';
import PaymentListContainer from '../containers/paymentList/PaymentListContainer';

const PaymentListPage = ({navigation}) => {
  return (
    <>
      <SubHeader title={'나의 결제내역'} navigation={navigation} />
      <PaymentListContainer />
      <MainFooter navigation={navigation} />
    </>
  );
};

export default PaymentListPage;
