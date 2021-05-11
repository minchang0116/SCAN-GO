package com.ssg.admin.service;

import com.ssg.member.data.Dto.MemberResponse;
import com.ssg.shopping.payment.data.Response.CustomerPaymentResponse;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AdminService {
    @Transactional
    List<MemberResponse> getMemberList(long pageNum);

    @Transactional
    List<CustomerPaymentResponse> getCustomerPaymentList(String loginId, long pageNum);
}
