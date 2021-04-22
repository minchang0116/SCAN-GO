/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

export const BarcodeScanningPage = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [openScanner, setOpenScanner] = useState(false);

  const onBarcodeScan = qrValue => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrValue);
    // setOpenScanner(false);
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
          {qrvalue ? (
            <Card style={styles.card}>
              <CardItem style={styles.cardItem}>
                <Body style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'http://image3.compuzone.co.kr/img/product_img/2021/0219/764689/764689_600.jpg',
                    }}
                    style={styles.productImg}
                  />
                  <View>
                    <Text>페퍼리지팜)밀라노170g</Text>
                    <Text>6,000원</Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
          ) : (
            ''
          )}
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
            style={styles.buttonStyle}>
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
  close: {
    zIndex: 5,
    width: 50,
    height: 50,
    position: 'absolute',
    left: '90%',
  },
  goToCartBtn: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 0,
    marginBottom: 2,
    height: 54,
  },
  productImg: {
    borderRadius: 6,
    width: 100,
    height: '100%',
  },
  card: {
    width: '95%',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 20,
    marginLeft: 'auto',
    borderRadius: 10,
  },
  cardItem: {
    borderRadius: 10,
    height: 100,
  },
});
