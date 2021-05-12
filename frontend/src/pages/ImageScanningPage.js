/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import IconAntD from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {CameraFooter} from '../components/scanning/CameraFooter';
import CameraItem from '../components/scanning/CameraItem';
import {addShoppingListItemByBarcode} from '../modules/shoppingList';

const ImageScanningPage = ({navigation}) => {
  const dispatch = useDispatch();

  const {lastItem, sumPrice, error} = useSelector(({shoppingList}) => ({
    lastItem: shoppingList.lastItem,
    sumPrice: shoppingList.sumPrice.toString().toLocaleString(),
    error: shoppingList.hasErrors,
  }));

  const [imageValue, setImageValue] = useState('');
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('data!!! :  ' + data.uri);
      const formData = {
        memberId: 1,
        prodCode: getProductCode(),
      };
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
    return 9310631626359;
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => navigation.navigate('MainPage')}>
        <IconAntD name="close" size={30} color="rgb(255, 255, 255)" />
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
      <TouchableOpacity style={styles.imageBtn} onPress={() => takePhoto()}>
        <IconF name="camera" size={30} color="rgb(255, 255, 255)" />
      </TouchableOpacity>
      <CameraFooter navigation={navigation} sumPrice={sumPrice} />
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
  imageBtn: {
    backgroundColor: 'rgb(218,41,28)',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    position: 'absolute',
    height: '10%',
    zIndex: 5,
    top: '88%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
  },
  card: {
    zIndex: 5,
    width: '95%',
    marginRight: 'auto',
    marginBottom: 80,
    marginLeft: 'auto',
    borderRadius: 10,
  },
});
