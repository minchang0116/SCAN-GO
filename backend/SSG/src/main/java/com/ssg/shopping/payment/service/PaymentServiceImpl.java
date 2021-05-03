package com.ssg.shopping.payment.service;

import com.ssg.member.data.Member;
import com.ssg.member.data.MemberRepository;
import com.ssg.shopping.payment.data.Entity.CurrentPayment;
import com.ssg.shopping.payment.data.Entity.CustomerPayment;
import com.ssg.shopping.payment.data.Repository.CurrentPaymentRepository;
import com.ssg.shopping.payment.data.Repository.CustomerPaymentRepository;
import com.ssg.shopping.payment.data.Repository.PaymentDetailRepository;
import com.ssg.shopping.payment.data.Response.CustomerPaymentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.PageRequest;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RequiredArgsConstructor
@Service
public class PaymentServiceImpl implements PaymentService {
    private final CustomerPaymentRepository customerPaymentRepository;
    private final PaymentDetailRepository paymentDetailRepository;
    private final CurrentPaymentRepository currentPaymentRepository;
    private final MemberRepository memberRepository;

    // 장바구니 조회
    @Override
    @Transactional
    public CustomerPaymentResponse getCustomerPayment(long memberId) {
        CurrentPayment currentPayment = currentPaymentRepository.findByMemberId(memberId);
        // 현재 작성중인 장바구니가 없음
        if(currentPayment == null) {
            Member member = memberRepository.findById(memberId).get();
            CustomerPayment customerPayment = customerPaymentRepository.save(new CustomerPayment("지점1", member));
            currentPaymentRepository.save(new CurrentPayment(member, customerPayment));
            return new CustomerPaymentResponse(customerPayment);
        } else { // 있음
            return new CustomerPaymentResponse(customerPaymentRepository.findById(currentPayment.getCustomerPayment().getId()).get());
        }
    }

    // 거래내역 조회
    @Override
    @Transactional
    public List<CustomerPaymentResponse> getCustomerPaymentList(long memberId, String date1, String date2, long pageNum) throws ParseException {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        Date txDate1 = df.parse(date1);
        Date txDate2 = df.parse(date2);
        List<CustomerPayment> paymentList = customerPaymentRepository.findByMember_IdAndTxDateTimeIsGreaterThanAndTxDateTimeLessThan(memberId, txDate1, txDate2, PageRequest.of((int)pageNum, 10));
        List<CustomerPaymentResponse> customerPaymentList = new ArrayList<>();
        for(CustomerPayment payment : paymentList) customerPaymentList.add(new CustomerPaymentResponse(payment));
        return customerPaymentList;
    }

    // 결제하기
    @Override
    @Transactional
    public void doPay(Map<String, Object> payment) throws ParseException {
        long paymentId = Long.parseLong((String) payment.get("txSeq"));
        CustomerPayment customerPayment = customerPaymentRepository.findById(paymentId).get();
        String authHash = (String) payment.get("authHash");
        String date = (String) payment.get("txDateTime");
        StringBuilder sb = new StringBuilder(date);
        sb.insert(4, '-');
        sb.insert(7, '-');
        sb.insert(10, ' ');
        sb.insert(13, ':');
        sb.insert(15, ':');
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date txDateTime = df.parse(sb.toString());
        customerPayment.updatePay(txDateTime, authHash);
    }

    // 결제결과 저장
    @Override
    @Transactional
    public void getPayResult(Map<String, String> result) {
        long paymentId = Long.parseLong(result.get("paymentId"));
        CustomerPayment customerPayment = customerPaymentRepository.findById(paymentId).get();
        customerPayment.updateResult(result.get("paymentPlan"), result.get("paymentResult"));
    }
}
