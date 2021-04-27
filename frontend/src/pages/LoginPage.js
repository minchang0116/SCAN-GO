import React, {useState} from 'react';
import {
  TouchableHighlight,
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import IconAntD from 'react-native-vector-icons/FontAwesome5';

const LoginPage = () => {
  const [autoLogin, setAutoLogin] = useState(false);
  const onToggle = () => {
    setAutoLogin(!autoLogin);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputForm}>
        <TextInput style={styles.textInput} placeholder="  아이디" />
        <TextInput style={styles.textInput} placeholder="  비밀번호" />
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
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight style={styles.subFuncArea}>
        <Text>회원가입</Text>
      </TouchableHighlight>
      <View style={styles.underLine} />
    </View>
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
    paddingTop: '60%',
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
