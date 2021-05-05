import {Container} from 'native-base';
import React from 'react';
import SubHeader from '../components/common/SubHeader';
import PaymentSuccessContainer from '../containers/payment/PaymentSuccessContainer';

const PaymentSuccessPage = ({navigation}) => {
  return (
    <Container>
      <SubHeader
        navigation={navigation}
        title={'결제 완료 페이지'}
        isIcon={false}
      />
      <PaymentSuccessContainer navigation={navigation} />
    </Container>
  );
};

export default PaymentSuccessPage;
