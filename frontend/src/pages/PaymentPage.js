import {Container} from 'native-base';
import React from 'react';
import SubHeader from '../components/common/SubHeader';
import PaymentContainer from '../containers/payment/PaymentContainer';

const PaymentPage = ({navigation}) => {
  return (
    <Container>
      <SubHeader
        navigation={navigation}
        title={'결제 완료 페이지'}
        isIcon={false}
      />
      <PaymentContainer navigation={navigation} />
    </Container>
  );
};

export default PaymentPage;
