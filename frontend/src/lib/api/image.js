import axios from 'axios';

export const getBarcode = formData => {
  return axios.post('http://3.18.221.184:5000/predict', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
