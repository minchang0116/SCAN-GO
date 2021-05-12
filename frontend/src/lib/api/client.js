import axios from 'axios';
import * as asyncStorage from '../../AsyncStorage/asyncStorage';

const host = 'http://k4d101.p.ssafy.io:9000/ssg';
const token = asyncStorage.getData('token');

const client = axios.create({
  baseURL: host,
  withCredentials: true,
  // headers: {
  //   authorization: token,
  // },
});

export default client;
