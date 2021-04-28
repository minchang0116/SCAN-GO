/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, TouchableHighlight, StyleSheet} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {CameraFooter} from '../components/CameraFooter';
import IconAntD from 'react-native-vector-icons/AntDesign';
import CameraItem from '../components/CameraItem';
import {useDispatch, useSelector} from 'react-redux';
import {addShoppingListItemByBarcode} from '../modules/shoppingList';

const BarcodeScanningPage = ({navigation}) => {
  const lastItem = useSelector(state => state.shoppingList.lastItem);
  const dispatch = useDispatch();

  const [qrvalue, setQrvalue] = useState('');

  const onBarcodeScan = qrValue => {
    dispatch(addShoppingListItemByBarcode(qrValue));
    lastItem ? setQrvalue(lastItem) : '';
    removeQrValue();
  };

  const removeQrValue = () => {
    setTimeout(() => {
      setQrvalue('');
    }, 5000);
    // lastItem 지우는 dispatch 호출
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TouchableHighlight
          underlayColor="tansparent"
          style={styles.close}
          onPress={() => navigation.navigate('MainPage')}>
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
