import React, {useState, useRef} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import IconAntD from 'react-native-vector-icons/FontAwesome5';
import SubHeader from '../components/common/SubHeader';
import AppText from '../components/common/AppText';
import {useDispatch} from 'react-redux';
import {fetchUserInfo} from '../modules/userInfo';
import * as loginAPI from '../lib/api/auth';

const LoginPage = ({navigation}) => {
  const [memberId, setId] = useState('');
  const [password, setPw] = useState('');
  const passwordRef = useRef();
  const idRef = useRef();
  const [autoLogin, setAutoLogin] = useState(false);
  const dispatch = useDispatch();
  const onToggle = () => {
    setAutoLogin(!autoLogin);
  };

  const loginBtn = async () => {
    console.log('로그인');
    if (memberId === '') {
      Alert.alert('ID 확인', 'ID를 입력해주세요.', [
        {
          text: '확인',
          onPress: () => idRef.current.focus(),
        },
      ]);
      return;
    }

    if (password === '') {
      Alert.alert('비밀번호 확인', '비밀번호를 입력해주세요.', [
        {
          text: '확인',
          onPress: () => passwordRef.current.focus(),
        },
      ]);
      return;
    }
    try {
      let response = await loginAPI.LoginWithPassword({
        loginId: memberId,
        loginPwd: password,
      });
      console.log('token: ' + response.data.token);
      if (response.status === 200) {
        console.log("디스패치 전")
        dispatch(fetchUserInfo(response.data.token));
        navigation.navigate('MainPage');
      }
    } catch (e) {
      Alert.alert('계정 확인', '없는 계정이거나 틀린 비밀번호입니다.', [
        {
          text: '확인',
          onPress: () => console.log("계정 확인")
        },
      ]);
      return;
    }
  };
  return (
    <>
      <SubHeader title={'로그인'} navigation={navigation} isIcon={false} />
      <View style={styles.container}>
        <View style={styles.inputForm}>
          <TextInput
            ref={idRef}
            style={styles.textInput}
            keyboardType={'email-address'}
            placeholder="아이디(email)"
            value={memberId}
            onChangeText={text => setId(text)}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
          />
          <TextInput
            ref={passwordRef}
            style={styles.textInput}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPw(text)}
            placeholder="비밀번호"
          />
        </View>
        <TouchableOpacity style={styles.saveIdArea} onPress={onToggle}>
          {autoLogin ? (
            <IconAntD name="check-circle" size={20} color="rgb(218,41,28)" />
          ) : (
            <IconAntD name="check-circle" size={20} color="rgb(226,226,226)" />
          )}
          <AppText> 아이디 저장</AppText>
        </TouchableOpacity>
        <View style={styles.loginBtnArea}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              loginBtn();
            }}>
            <AppText style={styles.loginText}>로그인</AppText>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.subFuncArea}
          onPress={() => {
            navigation.navigate('RegisterForm');
          }}>
          <AppText>회원가입</AppText>
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
    borderBottomColor: 'rgb(226,226,226)',
    borderBottomWidth: 1,
  },
  loginBtnArea: {
    paddingTop: 15,
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(218, 41, 28)',
    height: 50,
  },
  loginText: {
    fontSize: 26,
    color: 'white',
  },
  subFuncArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
