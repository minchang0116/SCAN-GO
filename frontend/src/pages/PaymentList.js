/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import IconAntD from 'react-native-vector-icons/AntDesign';
import SubHeader from '../components/common/SubHeader';
import {Container, Content} from 'native-base';
import Footer from '../components/common/YjFooter';
import PaymentItem from '../components/payment/PaymentItem';

const PaymentList = () => {
  return (
    <>
      <SubHeader title={'나의 결제내역'} />
      <Container>
        <Content>
          {paymentList.map((item, index) => {
            return <PaymentItem item={item} index={index} />;
          })}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default PaymentList;

const paymentList = [
  {
    date: '2021.04.18',
    orderNo: '2021-04-18-D67DD4',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
  {
    date: '2021.04.19',
    orderNo: '2021-04-18-811157',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
  {
    date: '2021.04.20',
    orderNo: '2021-04-18-811157',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
  {
    date: '2021.04.21',
    orderNo: '2021-04-18-811157',
    total: '89,200',
    storeName: '이마트 동구미점',
    products: [
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
      {
        name: '페퍼리지팜)밀라노170g',
        price: '6,000',
        qty: '2',
      },
    ],
  },
];
