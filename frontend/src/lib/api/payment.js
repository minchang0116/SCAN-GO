import client from './client';

export const requestPayment = formData => {
  return setTimeout(() => {
    return 1;
  }, 5000);
  // return client.post('/payment/pay', {txSeq: 1, txDataTime: 1, storeId: ,clientNo, prdoList:, authHash: });
};
