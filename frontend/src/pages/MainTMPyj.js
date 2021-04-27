/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableHighlight,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import {Text} from 'native-base';

const MainTMPyj = ({navigation, qrvalue}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>파이팅!</Text>
        <Text style={styles.textStyle}>
          {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
        </Text>
        <TouchableHighlight
          onPress={requestCameraPermission({navigation})}
          style={styles.addBtnStyle}>
          <Text style={styles.buttonTextStyle}>상품추가하기!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('PaymentList')}
          style={styles.addBtnStyle}>
          <Text style={styles.buttonTextStyle}>결제내역조회</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default MainTMPyj;

const requestCameraPermission = async ({navigation}) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: '카메라 권한',
        message: '카메라 사용권한이 필요합니다!!!!!',
        // buttonNeutral: '나중에 다시 알림',
        // buttonNegative: 'No',
        // buttonPositive: 'Yes',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   navigation.navigate('BarcodeScanningPage');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    alert('Camera permission err', err);
    console.warn(err);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    // paddingTop: insets ? insets.top : 0,
    // paddingBottom: insets ? insets.bottom : 0,
    // paddingLeft: insets ? insets.left : 0,
    // paddingRight: insets ? insets.right : 0,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  addBtnStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
  close: {
    zIndex: 5,
    width: 50,
    height: 50,
    position: 'absolute',
    left: '90%',
  },
});
