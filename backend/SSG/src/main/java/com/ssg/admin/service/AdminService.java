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

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AdminService {
    private final MemberRepository memberRepository;
    private final CustomerPaymentRepository customerPaymentRepository;

    // 회원정보 조회
    @Transactional
    public List<MemberResponse> getMemberList(long pageNum) {
        List<MemberResponse> list = new ArrayList<>();
        List<Member> members = memberRepository.findAll(PageRequest.of((int)pageNum, 10)).getContent();
        for(Member member : members) {
            if(member.isActivated()) list.add(new MemberResponse(member));
        }
        return list;
    }

    // 거래내역 전체 조회
    @Transactional
    public List<CustomerPaymentResponse> getAllCustomerPaymentList(String loginId, long pageNum) {
        List<CustomerPaymentResponse> list = new ArrayList<>();
        List<CustomerPayment> customerPayments = customerPaymentRepository.findByMemberLoginId(loginId, PageRequest.of((int)pageNum, 10, Sort.Direction.DESC, "txDateTime"));
        for(CustomerPayment customerPayment : customerPayments) {
            if(!customerPayment.getPaymentResult().equals("")) list.add(new CustomerPaymentResponse(customerPayment));
        }
        return list;
    }

    // 거래내역 날짜별 조회
    @Transactional
    public List<CustomerPaymentResponse> getDateCustomerPaymentList(String loginId, String date1, String date2, long pageNum) throws ParseException {
        List<CustomerPaymentResponse> customerPaymentList = new ArrayList<>();
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        Date txDate1 = df.parse(date1);
        Calendar cal = Calendar.getInstance();
        Date txDate2 = df.parse(date2);
        cal.setTime(txDate2);
        cal.add(Calendar.DATE, 1);
        txDate2 = cal.getTime();
        System.out.println(txDate1.toString()+" "+txDate2.toString());
        List<CustomerPayment> paymentList = customerPaymentRepository.findByMemberLoginIdAndTxDateTimeIsGreaterThanAndTxDateTimeLessThan(loginId, txDate1, txDate2, PageRequest.of((int)pageNum, 10, Sort.Direction.DESC, "txDateTime"));
        if(paymentList != null) {
            System.out.println(txDate1+" "+txDate2);
            for(CustomerPayment payment : paymentList) {
                if(payment.getPaymentResult().equals("")) continue;
                customerPaymentList.add(new CustomerPaymentResponse(payment));
            }
        }

        return customerPaymentList;
    }
}
