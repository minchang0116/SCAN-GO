/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, TouchableHighlight, StyleSheet} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {CameraFooter} from '../components/CameraFooter';
import IconAntD from 'react-native-vector-icons/AntDesign';
import CameraItem from '../components/CameraItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  addShoppingListItemByBarcode,
  removeLastItem,
} from '../modules/shoppingList';
import MainFooter from '../components/common/MainFooter';

const BarcodeScanningPage = ({navigation}) => {
  const dispatch = useDispatch();

  const {lastItem, loading} = useSelector(({shoppingList}) => ({
    lastItem: shoppingList.lastItem,
    loading: shoppingList.loading,
  }));

  const [qrvalue, setQrvalue] = useState('');

  useEffect(() => {
    if (!qrvalue) {
      return;
    }
    console.log('실행');
    const formData = {
      memberId: 1,
      prodCode: qrvalue,
    };
    dispatch(addShoppingListItemByBarcode({formData}));
    setTimeout(() => {
      dispatch(removeLastItem());
      setQrvalue('');
    }, 5000);
  }, [qrvalue]);

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
            onReadCode={async event => {
              await setQrvalue('8992741941303');
              // await setQrvalue(event.nativeEvent.codeStringValue);
            }}
          />
        </View>
        {lastItem ? <CameraItem lastItem={lastItem} /> : <></>}
        <CameraFooter />
      </View>
      <MainFooter navigation={navigation} />
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
