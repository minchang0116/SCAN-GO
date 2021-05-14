import axios from 'axios';

export const getBarcode = formData => {
  return axios.post('http://70.12.130.104:5000/predict', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
