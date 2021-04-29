import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const RegisterForm = ({navigation}) => {
  // 유저 정보
  // 아이디
  const [idCheck, setIdCheck] = useState(false);
  const [id, setId] = useState('');
  const [isduplicated_id, setDid] = useState(false);
  // 생일
  const [birthCheck, setbirthCheck] = useState(false);

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
  const onIdCheckHandler = () => {
    if (id === '') {
      alert('ID를 입력해주세요.');
      return;
    }
    // back에 아이디 있는지 확인 체크
    setIdCheck(true);
    setDid(false);
  };

  // 생일 입력 체크
  const onBirthCheckHandler = text => {
    let birth = text;

    if (birth === '') {
      setBirthBlank(true);
      return;
    }
    setBirthBlank(false);
    if (birth.length != 4) {
      setbirthCheck(false);
      return;
    }

    let month = Number(birth.substr(0, 2));
    let day = Number(birth.substr(2, 4));

    if (month < 1 || month > 12) {
      alert('달은 1월부터 12월까지 입력 가능합니다.');
      setbirthCheck(false);
      return;
    }
    if (day < 1 || day > 31) {
      alert('일은 1일부터 31일까지 입력가능합니다.');
      setbirthCheck(false);
      return;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
      alert(month + '월은 31일이 존재하지 않습니다.');
      setbirthCheck(false);
      return;
    }

    setbirthCheck(true);
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
    setCellBlank(false);
  };
  // 휴대전화 중복 체크
  const onCellCheckHandler = () => {
    if (cellnumber === '') {
      setCellBlank(true);
      alert('휴대전화를 입력해주세요.');
      return;
    }

    // back에 휴대전화 있는지 확인 체크
    setCellCheck(true);
    setDcell(false);
  };

  // 모든 정보가 제대로 입력되었는지 확인
  const checkAllRegisterInfoHandler = () => {
    navigation.navigate('MainPage')
    return;

    if (!idCheck) {
      alert('ID 중복체크를 해주세요!');
      return;
    }
    if (!birthCheck) {
      alert('생일을 입력해주세요!');
      return;
    }
    if (!pwFormCheck) {
      alert('비밀번호 양식을 확인해주세요!');
      return;
    }
    if (!pwCheck) {
      alert('비밀번호를 다시 확인해주세요!');
      return;
    }
    if (!cellCheck) {
      alert('휴대전화 인증을 해주세요!');
      return;
    }
    // Back 통신
    alert('회원가입이 완료되었습니다.');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.inputForm}>
        <View>
          <Text style={styles.titleText}>ID(Email)</Text>
          <View style={styles.inputWithBtnArea}>
            <TextInput
              autoCompleteType={'email'}
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
            placeholder="0429"
            onChangeText={onBirthCheckHandler}
            number
          />
          {birthBlank ? null : birthCheck ? null : (
            <Text style={styles.afterCheck}>생일을 확인해주세요</Text>
          )}
        </View>
        <View>
          <Text style={styles.titleText}>비밀 번호</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onPasswordHandler(text)}
            placeholder="영문,숫자,특수문자를 포함한 8자리 초과 20자리 미만"
            secureTextEntry={true}
          />
          <View>
            {pwFormBlank ? null : pwFormCheck ? null : (
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
            {pwBlank ? null : pwCheck ? null : (
              <Text style={styles.preCheck}>비밀번호가 일치하지 않습니다!</Text>
            )}
          </View>
        </View>
        <Text style={styles.titleText}>휴대 전화</Text>
        <View style={styles.inputWithBtnArea}>
          <TextInput
            style={styles.inputWithBtn}
            autoCompleteType={'tel'}
            placeholder="010-0000-0000"
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
            ) : null
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CheckBtn: {
    height: 40,
    alignItems: 'center',
    backgroundColor: 'rgb(218, 41, 28)',
    marginBottom: 10,
  },
  btnText: {
    fontSize: 17,
    color: 'white',
    margin: 8,
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
