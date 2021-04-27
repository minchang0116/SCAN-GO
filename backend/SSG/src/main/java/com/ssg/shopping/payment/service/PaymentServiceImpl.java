package com.ssg.shopping.payment.service;

import com.ssg.member.data.Member;
import com.ssg.member.data.MemberRepository;
import com.ssg.shopping.payment.data.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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


}
