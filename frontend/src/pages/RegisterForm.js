import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import SubHeader from '../components/common/SubHeader';
import * as registerAPI from '../lib/api/register';

const RegisterForm = ({navigation}) => {
  // 유저 정보
  // 아이디
  const [idCheck, setIdCheck] = useState(false);
  const [id, setId] = useState('');
  const [isduplicated_id, setDid] = useState(false);
  // 생일
  const [birthCheck, setbirthCheck] = useState(false);
  const [birth, setBirth] = useState('');

  // 비밀번호
  const [pwCheck, setPwCheck] = useState(false);
  const [pwFormCheck, setpwFormCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  // 휴대전화
  const [cellnumber, setCellNum] = useState('');
  const [cellCheck, setCellCheck] = useState(false);
  const [isduplicated_cell, setDcell] = useState(false);

  // 빈칸 관리
  const [idBlank, setIdBlank] = useState(true);
  const [birthBlank, setBirthBlank] = useState(true);
  const [pwFormBlank, setPwFormBlank] = useState(true);
  const [pwBlank, setPwBlank] = useState(true);
  const [cellBlank, setCellBlank] = useState(true);

  // 아이디 입력 확인
  const onIdInputHandler = text => {
    let id = text;
    setId(id);
    setIdCheck(false);
    if (id === '') {
      setIdBlank(true);
      return;
    }
    setIdBlank(false);
  };

  // 아이디 중복 체크
  const onIdCheckHandler = async() => {
    if (id === '') {
      Alert.alert('ID 확인', 'ID를 입력해주세요.', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      return;
    }

    // 이메일 형식 체크
    let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
    if(!reg_email.test(id)){
      Alert.alert('ID 확인', 'Email의 형식을 확인해주세요!.', [
        {
          text: '확인',
          onPress: () => console.log('email check'),
        },
      ]);
      return ;
    }
    
    // back에 아이디 있는지 확인 체크
    const response = await registerAPI.checkEmailAddress(id);

    setIdCheck(true);
    setDid(false);
  };

  // 생일 입력 체크
  const onBirthCheckHandler = text => {
    let inbirth = text;
    setBirth(inbirth);

    if (inbirth === '') {
      setBirthBlank(true);
      return;
    }
    const regex = /^[0-9]{0,4}$/;
    if (!regex.test(inbirth)) {
      inbirth = inbirth.replace(/[-,. a-zA-Z]/g, '');
      setBirth(inbirth);
      setbirthCheck(false);
      return;
    }

    setBirthBlank(false);
    if (inbirth.length != 4) {
      setbirthCheck(false);
      return;
    }

    let month = Number(inbirth.substr(0, 2));
    let day = Number(inbirth.substr(2, 4));

    if (month < 1 || month > 12) {
      setBirth('');
      Alert.alert('생일 확인', '달은 1월부터 12월까지 입력 가능합니다.', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      setbirthCheck(false);
      return;
    }
    if (day < 1 || day > 31) {
      setBirth('');
      Alert.alert('생일 확인', '일은 1일부터 31일까지 입력가능합니다.', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      setbirthCheck(false);
      return;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
      setBirth('');
      Alert.alert('생일 확인', month + '월은 31일이 존재하지 않습니다.', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      setbirthCheck(false);
      return;
    }

    setbirthCheck(true);
    setBirth(inbirth);
  };

  // 비밀번호 양식 체크
  const onPasswordHandler = text => {
    let pw = text;
    setPassword(pw);

    if (pw !== confirm_password) {
      setPwCheck(false);
    } else {
      setPwCheck(true);
    }

    if (text === '') {
      setPwFormBlank(true);
      return;
    }

    setPwFormBlank(false);

    let num = pw.search(/[0-9]/g);

    let eng = pw.search(/[a-zA-Z]/gi);

    let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 8 || pw.length > 20) {
      // 길이 체크
      setpwFormCheck(false);
      return;
    }

    if (pw.search(/ /) != -1) {
      // 공백 여부 체크
      setpwFormCheck(false);
      return;
    }
    if (num < 0 || eng < 0 || spe < 0) {
      // 특수문자 체크
      setpwFormCheck(false);
      return;
    }
    // 가능
    setpwFormCheck(true);
  };

  // 비밀번호 확인
  const onPasswordConfirmHandler = text => {
    let confirmPw = text;
    setConfirmPassword(confirmPw);
    if (text === '') {
      setPwCheck(false);
      setPwBlank(true);
      return;
    }

    setPwBlank(false);

    if (confirmPw !== password) {
      setPwCheck(false);
      return;
    }
    setPwCheck(true);
  };

  // 휴대전화 입력
  const onCellInputHandler = text => {
    let cell = text;
    setCellNum(cell);
    setCellCheck(false);
    if (cell === '') {
      setCellBlank(true);
      return;
    }
    const regex = /^[0-9]{0,11}$/;
    if (!regex.test(cell)) {
      cell = cell.replace(/[-,. a-zA-Z]/g, '');
      setCellNum(cell);
      return;
    }

    if (cell.length === 11) {
      cell = cell.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      setCellNum(cell);
      console.log(cell);
    }

    setCellBlank(false);
  };
  // 휴대전화 중복 체크
  const onCellCheckHandler = () => {
    if (cellnumber === '') {
      Alert.alert('번호 확인', '휴대 전화 번호를 입력해주세요!', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      setCellBlank(true);
      return;
    }

    // back에 휴대전화 있는지 확인 체크
    const response = registerAPI.checkCellNumber(cellnumber);

    setCellCheck(true);
    setDcell(false);
  };

  // 모든 정보가 제대로 입력되었는지 확인
  const checkAllRegisterInfoHandler = () => {
    navigation.navigate('LoginPage');
    return;
    
    if (!idCheck) {
      Alert.alert('ID 확인', 'ID 중복 체크를 해주세요!', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      return;
    }
    if (!birthCheck) {
      Alert.alert('생일 확인', '생일을 확인 해주세요!', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      return;
    }
    if (!pwFormCheck) {
      Alert.alert('비밀번호 확인', '비밀번호 양식을 확인 해주세요!', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      return;
    }
    if (!pwCheck) {
      Alert.alert('비밀번호 확인', '비밀번호가 같은지 확인 해주세요!', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      return;
    }
    if (!cellCheck) {
      Alert.alert('전화 번호 확인', '휴대전화 중복 체크를 해주세요!', [
        {
          text: '확인',
          onPress: () => console.log('confirm Pressed'),
        },
      ]);
      return;
    }
    // Back 통신
    const formData = new FormData();

    formData.append("memberId", id);
    formData.append("birth", birth);
    formData.append("password", password);
    formData.append("cell", cellnumber);
    
    const response = registerAPI.registerUser(formData);

    Alert.alert('완벽합니다!', '환영합니다! 회원가입에 성공했습니다!', [
      {
        text: '확인',
        onPress: () => console.log('confirm Pressed'),
      },
    ]);
  };

  return (
    <>
      <SubHeader title={'회원가입'} navigation={navigation} isIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.inputForm}>
          <View>
            <Text style={styles.titleText}>ID(Email)</Text>
            <View style={styles.inputWithBtnArea}>
              <TextInput
                autoCompleteType={'email'}
                keyboardType={'email-address'}
                style={styles.inputWithBtn}
                placeholder="example@gmail.com"
                onChangeText={text => onIdInputHandler(text)}
              />
              <TouchableOpacity
                style={styles.CheckBtn}
                onPress={onIdCheckHandler}>
                <Text style={styles.btnText}>중복체크</Text>
              </TouchableOpacity>
            </View>
            <View>
              {idBlank ? null : idCheck ? (
                isduplicated_id ? ( // 중복 여부
                  <Text style={styles.afterCheck}>ID가 중복되었습니다!</Text>
                ) : (
                  <Text style={styles.afterCheck}>사용가능한 ID 입니다!</Text>
                )
              ) : (
                // 중복체크
                <Text style={styles.preCheck}>ID 중복체크를 해주세요.</Text>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.titleText}>생일</Text>
            <TextInput
              style={[styles.textInput, {marginBottom: 6}]}
              keyboardType={'numeric'}
              maxLength={4}
              placeholder="1231"
              onChangeText={text => onBirthCheckHandler(text)}
              value={birth}
            />
            {birthBlank ? null : birthCheck ? (
              null
            ) : (
              <Text style={styles.afterCheck}>생일을 확인해주세요</Text>
            )}
          </View>
          <View>
            <Text style={styles.titleText}>비밀 번호</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onPasswordHandler(text)}
              placeholder="영문,숫자,특수문자를 포함한 8~20자리"
              secureTextEntry={true}
            />
            <View>
              {pwFormBlank ? null : pwFormCheck ? (
                <Text style={styles.afterCheck}>
                  사용가능한 비밀번호입니다!
                </Text>
              ) : (
                <Text style={styles.afterCheck}>
                  비밀번호 양식을 확인해주세요
                </Text>
              )}
            </View>
            <Text style={styles.titleText}>비밀 번호 확인</Text>
            <TextInput
              style={[styles.textInput, {marginBottom: 10}]}
              placeholder="다시 한번 입력해주세요"
              secureTextEntry={true}
              onChangeText={text => {
                onPasswordConfirmHandler(text);
              }}
            />
            <View>
              {pwBlank ? null : pwCheck ? (
                <Text style={styles.afterCheck}>확인되었습니다!</Text>
              ) : (
                <Text style={styles.preCheck}>
                  비밀번호가 일치하지 않습니다!
                </Text>
              )}
            </View>
          </View>
          <Text style={styles.titleText}>휴대 전화</Text>
          <View style={styles.inputWithBtnArea}>
            <TextInput
              style={styles.inputWithBtn}
              keyboardType={'numeric'}
              maxLength={13}
              value={cellnumber}
              placeholder="휴대폰 번호를 입력해주세요."
              onChangeText={text => {
                onCellInputHandler(text);
              }}
            />
            <TouchableOpacity
              style={styles.CheckBtn}
              onPress={onCellCheckHandler}>
              <Text style={styles.btnText}>중복체크</Text>
            </TouchableOpacity>
          </View>
          <View>
            {cellBlank ? null : cellCheck ? (
              isduplicated_cell ? (
                <Text style={styles.preCheck}>휴대전화가 중복되었습니다.</Text>
              ) : (
                <Text style={styles.afterCheck}>사용가능한 번호입니다!</Text>
              )
            ) : (
              <Text style={styles.preCheck}>휴대전화 중복체크를 해주세요.</Text>
            )}
          </View>
        </View>
        <View style={styles.registerBtnArea}>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={checkAllRegisterInfoHandler}>
            <Text style={styles.registerText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginRight: '5%',
  },
  inputForm: {
    paddingTop: '20%',
  },
  textInput: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 40,
    borderColor: 'rgb(226,226,226)',
    marginBottom: 10,
  },
  inputWithBtn: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 40,
    borderColor: 'rgb(226,226,226)',
    marginBottom: 10,
    width: 270,
  },
  preCheck: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(218, 41, 28)',
    marginBottom: 20,
  },
  afterCheck: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(218, 41, 28)',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    marginBottom: 3,
  },
  inputWithBtnArea: {
    flex:1,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(218, 41, 28)',
    marginBottom: 10,
    marginLeft: 10,
  },
  btnText: {
    fontSize: 13,
    color: 'white',
    margin: 6,
  },
  timerText: {
    fontSize: 28,
    color: 'rgb(218, 41, 28)',
    paddingBottom: 14,
  },
  registerBtnArea: {
    marginTop: 80,
    marginBottom: 10,
  },
  registerBtn: {
    alignItems: 'center',
    backgroundColor: 'rgb(218, 41, 28)',
  },
  registerText: {
    fontSize: 26,
    color: 'white',
    margin: 6,
  },
});
