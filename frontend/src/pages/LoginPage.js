import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import IconAntD from 'react-native-vector-icons/FontAwesome5';
import SubHeader from '../components/common/SubHeader';

const LoginPage = ({navigation}) => {
  const [autoLogin, setAutoLogin] = useState(false);
  const onToggle = () => {
    setAutoLogin(!autoLogin);
  };
  return (
    <>
      <SubHeader title={'로그인'} navigation={navigation} isIcon={false} />
      <View style={styles.container}>
        <View style={styles.inputForm}>
          <TextInput style={styles.textInput} placeholder="아이디" />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="비밀번호"
          />
        </View>
        <TouchableOpacity style={styles.saveIdArea} onPress={onToggle}>
          {autoLogin ? (
            <IconAntD name="check-circle" size={20} color="rgb(218,41,28)" />
          ) : (
            <IconAntD name="check-circle" size={20} color="rgb(226,226,226)" />
          )}
          <Text> 아이디 저장</Text>
        </TouchableOpacity>
        <View style={styles.loginBtnArea}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('RegisterForm');
            }}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.subFuncArea}
          onPress={() => {
            navigation.navigate('RegisterForm');
          }}>
          <Text>회원가입</Text>
        </TouchableOpacity>
        <View style={styles.underLine} />
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
  },
  inputForm: {
    paddingTop: '40%',
  },
  textInput: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 60,
    borderColor: 'rgb(226,226,226)',
  },
  saveIdArea: {
    maxWidth: '30%',
    flexDirection: 'row',
    paddingTop: 15,
  },
  underLine: {
    paddingTop: 15,
    borderBottomColor: 'rgb(226,226,226)',
    borderBottomWidth: 1,
  },
  loginBtnArea: {
    paddingTop: 15,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: 'rgb(218, 41, 28)',
  },
  loginText: {
    fontSize: 26,
    color: 'white',
    margin: 6,
  },
  subFuncArea: {
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
