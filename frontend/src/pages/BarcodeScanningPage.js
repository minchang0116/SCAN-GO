/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {Button, Card, CardItem, Body, Text} from 'native-base';
import {CameraFooter} from '../components/CameraFooter';
import IconAntD from 'react-native-vector-icons/AntDesign';
import CameraItem from '../components/CameraItem';

export const BarcodeScanningPage = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [openScanner, setOpenScanner] = useState(false);

  const onBarcodeScan = qrValue => {
    setQrvalue(qrValue);
    removeQrValue();
  };

  const removeQrValue = () => {
    setTimeout(() => {
      setQrvalue('');
    }, 5000);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: '카메라 권한',
          message: '카메라 사용권한이 필요합니다!!!!!',
          // buttonNeutral: '나중에 다시',
          // buttonNegative: '싫어ㅠㅠ',
          // buttonPositive: '좋아!!!!',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setQrvalue('');
        setOpenScanner(true);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      alert('Camera permission err', err);
      console.warn(err);
    }
  };

  const clickCloseBtn = () => {
    setOpenScanner(false);
  };

  useEffect(() => {}, [openScanner]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {openScanner ? (
        <View style={{flex: 1}}>
          <TouchableHighlight
            underlayColor="tansparent"
            style={styles.close}
            onPress={clickCloseBtn}>
            <IconAntD name="close" size={30} color="rgb(255, 255, 255)" />
          </TouchableHighlight>
          <View style={{flex: 1}}>
            <CameraScreen
              showFrame={true}
              scanBarcode={true}
              laserColor={'transparent'}
              frameColor={'red'}
              colorForScannerFrame={'white'}
              onReadCode={event =>
                onBarcodeScan(event.nativeEvent.codeStringValue)
              }
            />
          </View>
          {qrvalue ? <CameraItem /> : <></>}
          <CameraFooter />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>바코드/QR 리더</Text>
          <Text style={styles.textStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
          <TouchableHighlight
            onPress={requestCameraPermission}
            style={styles.addBtnStyle}>
            <Text style={styles.buttonTextStyle}>상품추가하기!</Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BarcodeScanningPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
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
