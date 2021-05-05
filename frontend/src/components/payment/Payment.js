import {Left, List, ListItem, Radio, Right, Row, Text, View} from 'native-base';
import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {PaymentSuccessListItem} from '../payment/PaymentSuccess';
import PaymentFooter from './PaymentFooter';

const Payment = ({navigation, shoppingList}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.paymentMethod}>
          <Text style={styles.title}>결제방법</Text>
          <ListItem>
            <Radio
              style={styles.radio}
              color={'lightgrey'}
              selectedColor={'rgb(240,41,28)'}
              selected={true}
            />
            <Image
              style={styles.image}
              source={require('../../../imgs/SSGPAY.jpg')}
            />
            <Text style={true && styles.selected}>카드</Text>
          </ListItem>
          <ListItem>
            <Radio
              color={'lightgrey'}
              selectedColor={'rgb(240,41,28)'}
              selected={true}
            />
            <Image
              style={styles.image}
              source={require('../../../imgs/SSGPAY.jpg')}
            />
            <Text>계좌</Text>
          </ListItem>
          <ListItem>
            <Radio
              color={'lightgrey'}
              selectedColor={'rgb(240,41,28)'}
              selected={true}
            />
            <Text style={styles.bottomText}>다른 결제수단</Text>
          </ListItem>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.title}>결제 예정금액</Text>
          <View style={styles.body}>
            <View style={styles.span}>
              <Text>총 결제에정금액</Text>
              <Text>+189,000원</Text>
            </View>
          </View>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.title}>결제목록</Text>
          <List style={styles.list}>
            {shoppingList.paymentDetail &&
              shoppingList.paymentDetail.map(item => (
                <PaymentSuccessListItem key={item.prodId} {...item} />
              ))}
          </List>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  paymentMethod: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(220,220,220)',
    margin: 10,
  },
  title: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    margin: 15,
  },
  span: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    marginTop: 10,
  },
  image: {
    width: 65,
    height: 15,
    marginBottom: 1,
  },
  radio: {
    marginTop: 2,
  },
  bottomText: {
    marginLeft: 2,
  },
  selected: {
    fontWeight: 'bold',
  },
});
export default Payment;
