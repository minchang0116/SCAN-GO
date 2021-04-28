/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CameraFooter} from '../components/CameraFooter';
import IconAntD from 'react-native-vector-icons/AntDesign';
import CameraItem from '../components/CameraItem';
import {RNCamera} from 'react-native-camera';

const ImageScanningPage = ({navigation}) => {
  const [imageValue, setImageValue] = useState('');
  const cameraRef = useRef(null);

  // const onImageScan = value => {
  //   setImageValue(value);
  //   removeImageValue();
  // };

  // const removeImageValue = () => {
  //   setTimeout(() => {
  //     setImageValue('');
  //   }, 5000);
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     async () => {
  //       if (cameraRef) {
  //         const options = {quality: 0.5, base64: true};
  //         const data = await cameraRef.takePictureAsync(options);
  //         console.log('data!!!!!!!!!!!!!!!!!!!!!! :  ' + data.uri);
  //       }
  //     };
  //   }, 1000);
  // });

  const takePhoto = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('data!!!!!!!!!!!!!!!!!!!!!! :  ' + data.uri);
    }
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
        <View style={({flex: 1}, {height: '90%'})}>
          <RNCamera
            ref={cameraRef}
            style={({width: '100%'}, {height: '100%'})}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            // flashMode={RNCamera.Constants.FlashMode.on}
          />
        </View>
        <View style={({width: 100}, {height: 200}, {backgroundColor: 'red'})}>
          <TouchableOpacity
            style={({width: 100}, {height: 200})}
            onPress={takePhoto}>
            <Text style={({fontSize: 20}, {textAlign: 'center'})}>찰칵</Text>
          </TouchableOpacity>
        </View>
        {imageValue ? <CameraItem /> : <></>}
        <CameraFooter />
      </View>
    </SafeAreaView>
  );
};

export default ImageScanningPage;

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
