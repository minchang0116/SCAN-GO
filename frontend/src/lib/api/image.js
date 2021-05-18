import axios from 'axios';

export const getBarcode = formData => {
  return axios.post('http://18.216.211.181:5000/predict', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
