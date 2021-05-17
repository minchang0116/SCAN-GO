import axios from 'axios';

export const getBarcode = formData => {
  return axios.post('http://3.141.244.118:5000/predict', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
