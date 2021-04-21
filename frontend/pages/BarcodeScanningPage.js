/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {Footer, FooterTab, Button} from 'native-base';
import IconAntD from 'react-native-vector-icons/AntDesign';

export const BarcodeScanningPage = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [openScanner, setOpenScanner] = useState(false);

  const onBarcodeScan = qrValue => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrValue);
    setOpenScanner(false);
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

  return (
    <SafeAreaView style={{flex: 1}}>
      {openScanner ? (
        <View style={{flex: 1}}>
          <Button transparent style={styles.close}>
            <IconAntD name="close" size={30} color="rgb(255, 255, 255)" />
          </Button>
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
          <Footer>
            <FooterTab style={styles.footer}>
              <Text
                style={[
                  styles.footerText,
                  {fontSize: 18},
                  {marginLeft: 10},
                  {width: '30%'},
                  {height: '100%'},
                ]}>
                결제예정금액
              </Text>
              <Text style={[styles.footerText, {width: '50%'}]}>51,200원</Text>
              <Button
                style={[
                  {backgroundColor: 'rgb(255,255,255)'},
                  {borderRadius: 0},
                ]}>
                <IconAntD
                  name="shoppingcart"
                  size={40}
                  color="rgb(218, 41, 28)"
                />
              </Button>
              {/* <Button>
                <Text style={styles.footerText}>결제하기</Text>
              </Button> */}
            </FooterTab>
          </Footer>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>바코드/QR 리더</Text>
          <Text style={styles.textStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
          <TouchableHighlight
            onPress={requestCameraPermission}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>눌러라</Text>
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
  buttonStyle: {
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
  footer: {
    backgroundColor: 'rgb(218, 41, 28)',
  },
  footerText: {
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    height: '100%',
    textAlignVertical: 'center',
  },
  close: {
    zIndex: 5,
    width: 50,
    height: 50,
    position: 'absolute',
    left: '90%',
  },
});
