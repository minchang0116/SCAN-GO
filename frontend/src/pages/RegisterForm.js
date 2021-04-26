import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const RegisterForm = () => {
    const [idCheck, setIdCheck] = useState(false)
    const [pwCheck, setPwCheck] = useState(false)
    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.container}>
            <View style={styles.inputForm}>
                <View>
                    <Text style={styles.titleText}>ID(Email)</Text>
                    <View style={styles.inputWithBtnArea}>
                        <TextInput style={styles.inputWithBtn} placeholder=" @example.com"/>
                        <TouchableOpacity
                            style={styles.CheckBtn}
                        >
                            <Text style={styles.btnText}>중복체크</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {idCheck ? (<Text style={styles.afterCheck}>사용가능한 ID 입니다!</Text>) 
                        : <Text style={styles.preCheck} >ID 중복체크를 해주세요.</Text>}
                    </View>
                </View>
                <Text style={styles.titleText}>생년월일</Text>
                <TextInput style={styles.textInput} placeholder=" xxxx.xx.xx"/>
                <View>
                    <Text style={styles.titleText}>비밀 번호</Text>
                    <TextInput style={styles.textInput} placeholder=" 특수문자를 포함한 8자리 이상 20자리 이하"/>
                    <Text style={styles.titleText}>비밀 번호 확인</Text>
                    <TextInput style={[styles.textInput, {marginBottom:10}]} placeholder=" 다시 한번 입력해주세요"/>
                    <View>
                        {pwCheck ? (<Text style={styles.afterCheck}>비밀번호가 일치합니다!</Text>) 
                        : <Text style={styles.preCheck} >비밀번호가 일치하지 않습니다!</Text>}
                    </View>
                </View>
                <Text style={styles.titleText}>휴대 전화</Text>
                <View style={styles.inputWithBtnArea}>
                        <TextInput style={styles.inputWithBtn} placeholder=" xxx-xxxx-xxxx"/>
                        <TouchableOpacity
                            style={styles.CheckBtn}
                        >
                            <Text style={styles.btnText}>번호전송</Text>
                        </TouchableOpacity>
                </View>
                <Text style={[styles.titleText, {marginTop:10}]}>인증 번호</Text>
                <View style={styles.inputWithBtnArea}>
                        <TextInput style={styles.inputWithBtn} placeholder=" 인증번호를 입력해주세요"/>
                        <Text style={styles.timerText}>05:00</Text>
                </View>
            </View>
            <View style={styles.loginBtnArea}>
                <TouchableOpacity
                    style={styles.loginBtn}
                >
                    <Text style={styles.loginText}>로그인</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: "5%",
        marginRight: "5%",
    },
    inputForm: {
        paddingTop: "20%",
    },
    textInput:{
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 40,
        borderColor: "rgb(226,226,226)",
        marginBottom: 20,
    },
    inputWithBtn:{
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 40,
        borderColor: "rgb(226,226,226)",
        marginBottom: 10,
        width: 270,
    },
    preCheck:{
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
    },
    afterCheck:{
        fontSize: 16,
        color: "rgb(218, 41, 28)",
        marginBottom: 20,
    },
    titleText:{
        fontSize: 18,
        marginBottom: 3,
    },
    inputWithBtnArea:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    CheckBtn:{
        height: 40,
        alignItems: "center",
        backgroundColor: 'rgb(218, 41, 28)',
        marginBottom: 10,
    },
    btnText:{
        fontSize: 17,
        color: "white",
        margin: 8,
    },
    timerText:{
        fontSize: 28,
        color: "rgb(218, 41, 28)",
        paddingBottom: 14,
    },
    loginBtnArea: {
        marginTop: 10,
        marginBottom: 10,
    },
    loginBtn: {
        alignItems: "center",
        backgroundColor: 'rgb(218, 41, 28)',
    },
    loginText:{
        fontSize: 26,
        color: "white",
        margin: 6,
    },
})