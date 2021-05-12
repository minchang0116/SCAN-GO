/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import IconAntD from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {CameraFooter} from '../components/scanning/CameraFooter';
import CameraItem from '../components/scanning/CameraItem';
import {addShoppingListItemByBarcode} from '../modules/shoppingList';
import AppText from '../components/common/AppText';
import Spinner from '../components/common/Spinner';

const ImageScanningPage = ({navigation}) => {
  const dispatch = useDispatch();

  const {lastItem, sumPrice, error, loading} = useSelector(
    ({shoppingList}) => ({
      lastItem: shoppingList.lastItem,
      sumPrice: shoppingList.sumPrice.toString().toLocaleString(),
      error: shoppingList.hasErrors,
      loading: shoppingList.loading,
    }),
  );

  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('data!!! :  ' + data.uri);
      const formData = {
        prodCode: getProductCode().toString(),
      };
      console.log(getProductCode().toString());
      dispatch(addShoppingListItemByBarcode({formData}));

      if (error) {
        ToastAndroid.showWithGravityAndOffset(
          '찾을 수 없는 상품입니다. 다시 촬영해주세요.',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          25,
          100,
        );
      }
    }
  };

  const getProductCode = () => {
    return 8992839913137;
  };

  return (
    <View style={{flex: 1}}>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <>
        <TouchableOpacity
          style={styles.close}
          onPress={() => navigation.navigate('MainPage')}>
          <IconAntD name="close" size={30} style={styles.whiteText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.barcodeBtn}
          onPress={() => navigation.navigate('BarcodeScanningPage')}>
          <AppText style={styles.white11Text}>바코드</AppText>
          <AppText style={styles.white11Text}>스캔</AppText>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <RNCamera
            ref={cameraRef}
            style={({width: '100%'}, {height: '100%'})}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
          />
        </View>
        {lastItem && <CameraItem lastItem={lastItem} style={styles.card} />}
        <TouchableOpacity
          style={styles.takePhotoBtn}
          onPress={() => takePhoto()}>
          <IconF name="camera" size={30} style={styles.redText} />
        </TouchableOpacity>
        <CameraFooter navigation={navigation} sumPrice={sumPrice} />
      </>
      {/* )} */}
    </View>
  );
};

export default ImageScanningPage;

const styles = StyleSheet.create({
  close: {
    zIndex: 5,
    width: 50,
    height: 50,
    position: 'absolute',
    left: '88%',
    top: '3%',
  },
  takePhotoBtn: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '20%',
    height: '10%',
    zIndex: 5,
    top: '88%',
    left: '50%',
    transform: [{translateX: -30}, {translateY: -50}],
  },
  card: {
    zIndex: 5,
    width: '95%',
    marginRight: 'auto',
    marginBottom: 80,
    marginLeft: 'auto',
    borderRadius: 10,
  },
  redText: {
    color: 'rgb(218,41,28)',
  },
  whiteText: {
    color: 'rgb(255,255,255)',
  },
  barcodeBtn: {
    backgroundColor: 'rgb(218,41,28)',
    zIndex: 5,
    width: 50,
    height: 50,
    position: 'absolute',
    left: '82%',
    top: '10%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  white11Text: {
    color: 'rgb(255,255,255)',
    fontSize: 11,
  },
});
