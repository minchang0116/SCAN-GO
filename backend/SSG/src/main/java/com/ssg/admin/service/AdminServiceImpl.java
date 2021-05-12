package com.ssg.admin.service;

import com.ssg.member.data.Dto.MemberResponse;
import com.ssg.member.data.Member;
import com.ssg.member.data.MemberRepository;
import com.ssg.shopping.payment.data.Entity.CustomerPayment;
import com.ssg.shopping.payment.data.Repository.CustomerPaymentRepository;
import com.ssg.shopping.payment.data.Response.CustomerPaymentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AdminServiceImpl implements AdminService {
    private final MemberRepository memberRepository;
    private final CustomerPaymentRepository customerPaymentRepository;

    @Override
    @Transactional
    public List<MemberResponse> getMemberList(long pageNum) {
        List<MemberResponse> list = new ArrayList<>();
        List<Member> members = memberRepository.findAll(PageRequest.of((int)pageNum, 10)).getContent();
        for(Member member : members) {
            if(member.isActivated()) list.add(new MemberResponse(member));
        }
        return list;
    }

    @Override
    @Transactional
    public List<CustomerPaymentResponse> getCustomerPaymentList(String loginId, long pageNum) {
        List<CustomerPaymentResponse> list = new ArrayList<>();
        List<CustomerPayment> customerPayments = customerPaymentRepository.findByMemberLoginId(loginId, PageRequest.of((int)pageNum, 10, Sort.Direction.DESC, "txDateTime"));
        for(CustomerPayment customerPayment : customerPayments) {
            if(!customerPayment.getPaymentResult().equals("")) list.add(new CustomerPaymentResponse(customerPayment));
        }
        return list;
    }
}
