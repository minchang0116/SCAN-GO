## 신세계 아이앤씨 가상 장바구니 App Web 개발

강유정, 강민창, 곽충섭, 이지원, 지서연
<hr>

⚙설치방법

* frontend

1.  아래 링크에서 안드로이드 스튜디오 설치
https://reactnative.dev/docs/environment-setup

2. 제어판 > 시스템 및 보안 > 시스템 > 고급 시스템 설정 > 환경 변수 > 사용자 변수에 아래 추가
변수 이름 : ANDROID_HOME
변수 값 : C:\Users\사용자명\AppData\Local\Android\Sdk

3. 시스템 변수 > Path >  새로 만들기
C:\Users\사용자명\AppData\Local\Android\Sdk\platform-tools

4.
~~~

cd frontend

npm install -g react-native-cli

npm install 

react-native link

react-native run-android

~~~


안드로이드 기기 연결 두 가지 방법
1. 안드로이드 기기에 직접 연결
2. 안드로이드 스튜디오 > AVD manager > Pixel 4 > next > x86 Images R 선택> Next > Finish

