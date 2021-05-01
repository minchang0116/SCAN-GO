import {Text, View} from 'native-base';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentSuccess = () => {
  return (
    <>
      <View style={styles.view}>
        <Icon style={styles.icon_check} name="check" />
        <View style={styles.view_col}>
          <Text>21,700원</Text>
          <Text>결제가 완료되었습니다.</Text>
        </View>
      </View>
      <ScrollView>
        <PaymentSuccessList />
      </ScrollView>
    </>
  );
};

const PaymentSuccessList = () => {
  return <> </>;
};

const PaymentSuccessListItem = () => {
  return <> </>;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: 'lightgrey',
  },
  view_col: {
    flexDirection: 'column',
  },
  icon_check: {
    fontSize: 90,
    color: 'green',
  },
});

export default PaymentSuccess;
