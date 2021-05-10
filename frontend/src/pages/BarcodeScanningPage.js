/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {CameraFooter} from '../components/scanning/CameraFooter';
import IconAntD from 'react-native-vector-icons/AntDesign';
import CameraItem from '../components/scanning/CameraItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  addShoppingListItemByBarcode,
  removeLastItem,
} from '../modules/shoppingList';

const BarcodeScanningPage = ({navigation}) => {
  const dispatch = useDispatch();

  const {lastItem, sumPrice, error} = useSelector(({shoppingList}) => ({
    lastItem: shoppingList.lastItem,
    sumPrice: shoppingList.sumPrice.toString().toLocaleString(),
    error: shoppingList.hasErrors,
  }));

  const [qrvalue, setQrvalue] = useState('');

  useEffect(() => {
    if (!qrvalue || (lastItem && qrvalue === lastItem.prodCode)) {
      return;
    }
    console.log('qrvalue : ' + qrvalue);
    console.log('dispatch');
    dispatch(addShoppingListItemByBarcode({prodCode: qrvalue}));

    if (error) {
      ToastAndroid.showWithGravityAndOffset(
        '찾을 수 없는 상품입니다. 다시 스캔해주세요.',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        100,
      );
    }
  }, [qrvalue]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeLastItem());
      setQrvalue('');
    }, 5000);
  }, [lastItem]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => navigation.navigate('MainPage')}>
          <IconAntD name="close" size={30} color="rgb(255, 255, 255)" />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <CameraScreen
            showFrame={true}
            scanBarcode={true}
            laserColor={'transparent'}
            frameColor={'red'}
            colorForScannerFrame={'white'}
            onReadCode={event => setQrvalue(event.nativeEvent.codeStringValue)}
          />
        </View>
        {lastItem && <CameraItem lastItem={lastItem} />}
        <CameraFooter navigation={navigation} sumPrice={sumPrice} />
      </View>
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
    left: '88%',
    top: '3%',
  },
  errorContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 5,
    top: 100,
    left: 20,
    right: 20,
    borderRadius: 100,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
