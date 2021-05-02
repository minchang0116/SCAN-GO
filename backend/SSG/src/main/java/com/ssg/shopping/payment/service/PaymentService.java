package com.ssg.shopping.payment.service;

import com.ssg.shopping.payment.data.Response.CustomerPaymentResponse;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

public interface PaymentService {
    // 장바구니 조회
    @Transactional
    CustomerPaymentResponse getCustomerPayment(long memberId);

    // 거래내역 조회
    @Transactional
    List<CustomerPaymentResponse> getCustomerPaymentList(long memberId, long month, long pageNum);

    // 결제하기
    @Transactional
    public void doPay(Map<String, Object> payment) throws ParseException;

    // 결제결과 저장
    @Transactional
    public void getPayResult(Map<String, String> result);
}
