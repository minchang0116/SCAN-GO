package com.ssg.shopping.product.service;

import com.ssg.member.data.Member;
import com.ssg.member.data.MemberRepository;
import com.ssg.shopping.payment.data.Entity.CurrentPayment;
import com.ssg.shopping.payment.data.Entity.CustomerPayment;
import com.ssg.shopping.payment.data.Entity.PaymentDetail;
import com.ssg.shopping.payment.data.Repository.CurrentPaymentRepository;
import com.ssg.shopping.payment.data.Repository.CustomerPaymentRepository;
import com.ssg.shopping.payment.data.Repository.PaymentDetailRepository;
import com.ssg.shopping.payment.data.Response.PaymentDetailResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssg.shopping.product.data.Entity.Product;
import com.ssg.shopping.product.data.Repository.ProductRepository;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final CustomerPaymentRepository customerPaymentRepository;
    private final PaymentDetailRepository paymentDetailRepository;
    private final CurrentPaymentRepository currentPaymentRepository;
    private final MemberRepository memberRepository;

    // 바코드 찍어서 장바구니 내 상품 추가
    @Override
    @Transactional
    public PaymentDetailResponse getProduct(long memberId, String prodCode) {
        // 현재 장바구니가 있는지 확인
        CurrentPayment currentPayment = currentPaymentRepository.findByMemberId(memberId);
        CustomerPayment customerPayment = null;
        // 없으면 장바구니 만들기
        if(currentPayment == null) {
            Member member = memberRepository.findById(memberId).get();
            customerPayment = customerPaymentRepository.save(new CustomerPayment("지점1", member));
            currentPaymentRepository.save(new CurrentPayment(member, customerPayment));
        } else { // 있으면 장바구니 정보 조회
            customerPayment = customerPaymentRepository.findById(currentPayment.getCustomerPayment().getId()).get();
        }
        Product product = productRepository.findByProdCode(prodCode);
        // 장바구니에 이미 있는 상품인지 검사
        PaymentDetail paymentDetail = paymentDetailRepository.findByCustomerPayment_IdAndAndProduct_Id(customerPayment.getId(), product.getId());
        // 없으면 장바구니에 추가
        if(paymentDetail == null) paymentDetail = paymentDetailRepository.save(new PaymentDetail(product, customerPayment));
        // 있으면 개수 1 추가
        else paymentDetail.update(paymentDetail.getQty()+1);

        return new PaymentDetailResponse(paymentDetail);
    }

    // 장바구니 내 상품 개수 변경
    @Override
    @Transactional
    public void updateProduct(long memberId, long prodId, long qty) {
        CurrentPayment currentPayment = currentPaymentRepository.findByMemberId(memberId);
        if(currentPayment != null) {
            PaymentDetail paymentDetail = paymentDetailRepository.findByCustomerPayment_IdAndAndProduct_Id(currentPayment.getCustomerPayment().getId(), prodId);
            if(paymentDetail != null) paymentDetail.update(qty);
        }
    }

    // 장바구니 내 상품 삭제
    @Override
    @Transactional
    public void deleteProduct(long memberId, long prodId) {
        CurrentPayment currentPayment = currentPaymentRepository.findByMemberId(memberId);
        if(currentPayment != null) {
            PaymentDetail paymentDetail = paymentDetailRepository.findByCustomerPayment_IdAndAndProduct_Id(currentPayment.getCustomerPayment().getId(), prodId);
            if(paymentDetail != null) paymentDetailRepository.delete(paymentDetail);
        }
    }

    // 장바구니 내 상품 전체 삭제
    @Override
    @Transactional
    public void deleteAllProduct(long memberId) {
        CurrentPayment currentPayment = currentPaymentRepository.findByMemberId(memberId);
        if(currentPayment != null) {
            List<PaymentDetail> paymentDetails = paymentDetailRepository.findByCustomerPayment_Id(currentPayment.getCustomerPayment().getId());
            if(paymentDetails != null)
                for(PaymentDetail pd : paymentDetails) paymentDetailRepository.delete(pd);
        }
    }
}
